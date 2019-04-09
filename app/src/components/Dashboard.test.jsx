import React from "react";
import * as rtl from "react-testing-library";
import Dashboard from "./Dashboard";
import { getByTestId } from "react-testing-library";
import { fireEvent } from "react-testing-library";

afterEach(rtl.cleanup);

describe("Dashboard", () => {
  it("Renders a strike button", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/strike/i));
  });
  it("Renders a ball button", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/ball/i));
  });
  it("Renders a foul button", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/foul/i));
  });
  it("Renders a hit button", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/hit/i));
  });
  it("increases the strikes on strike", async () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/strikes: 0/i));
    rtl.fireEvent.click(wrap.getByTestId(/strike-button/));
    expect(wrap.getByText(/strikes: 1/i));
  });
  it("increases the balls on ball", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/balls: 0/i));
    rtl.fireEvent.click(wrap.getByTestId(/ball-button/));
    expect(wrap.getByText(/balls: 1/i));
  });
  it("Resets balls and strikes after 4 ball clicks", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/balls: 0/i));
    rtl.fireEvent.click(wrap.getByTestId(/ball-button/));
    expect(wrap.getByText(/balls: 1/i));
    rtl.fireEvent.click(wrap.getByTestId(/ball-button/));
    expect(wrap.getByText(/balls: 2/i));
    rtl.fireEvent.click(wrap.getByTestId(/ball-button/));
    expect(wrap.getByText(/balls: 3/i));
    expect(wrap.getByText(/strikes: 0/i));
    rtl.fireEvent.click(wrap.getByTestId(/strike-button/));
    expect(wrap.getByText(/strikes: 1/i));
    rtl.fireEvent.click(wrap.getByTestId(/ball-button/));
    expect(wrap.getByText(/balls: 0/i));
    expect(wrap.getByText(/strikes: 0/i));
  });
  it("Resets balls and strikes after 3 strike clicks", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/balls: 0/i));
    rtl.fireEvent.click(wrap.getByTestId(/ball-button/));
    expect(wrap.getByText(/balls: 1/i));
    expect(wrap.getByText(/strikes: 0/i));
    rtl.fireEvent.click(wrap.getByTestId(/strike-button/));
    expect(wrap.getByText(/strikes: 1/i));
    rtl.fireEvent.click(wrap.getByTestId(/strike-button/));
    expect(wrap.getByText(/strikes: 2/i));
    rtl.fireEvent.click(wrap.getByTestId(/strike-button/));
    expect(wrap.getByText(/balls: 0/i));
    expect(wrap.getByText(/strikes: 0/i));
  });
  it("foul increase strike up to 2", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/strikes: 0/i));
    rtl.fireEvent.click(wrap.getByTestId(/foul-button/));
    expect(wrap.getByText(/strikes: 1/i));
    rtl.fireEvent.click(wrap.getByTestId(/foul-button/));
    expect(wrap.getByText(/strikes: 2/i));
    rtl.fireEvent.click(wrap.getByTestId(/foul-button/));
    expect(wrap.getByText(/strikes: 2/i));
  });
  it("hit sets strikes and balls to 0", () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap.getByText(/strikes: 0/i));
    expect(wrap.getByText(/balls: 0/i));
    rtl.fireEvent.click(wrap.getByTestId(/ball-button/));
    rtl.fireEvent.click(wrap.getByTestId(/strike-button/));
    expect(wrap.getByText(/strikes: 1/i));
    expect(wrap.getByText(/balls: 1/i));
    rtl.fireEvent.click(wrap.getByTestId(/hit-button/));
    expect(wrap.getByText(/strikes: 0/i));
    expect(wrap.getByText(/balls: 0/i));
  });
});
