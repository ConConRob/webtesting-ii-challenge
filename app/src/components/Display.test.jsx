import React from "react";
import * as rtl from "react-testing-library";
import Display from "./Display";

afterEach(rtl.cleanup);

describe("Display", () => {
  it("It displays balls and strikes", () => {
    const wrap = rtl.render(<Display balls={0} strikes={0} />);
    expect(wrap.getByText(/balls/i));
    expect(wrap.getByText(/strikes/i));
  });
  it("It displays a number of ballls", () => {
    const wrap = rtl.render(<Display balls={2} strikes={0} />);
    expect(wrap.getByText(/balls: 2/i));
  });
  it("It displays a number of strikes", () => {
    const wrap = rtl.render(<Display balls={0} strikes={2} />);
    expect(wrap.getByText(/strikes: 2/i));
  });
  it("It displays 0 when no props are passed in", () => {
    const wrap = rtl.render(<Display />);
    expect(wrap.getByText(/strikes: 0/i));
    expect(wrap.getByText(/balls: 0/i));
  });
});
