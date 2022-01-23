import React, { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Checking init App", () => {
  render(<App />);

  // Calc should be exists
  expect(screen.queryByTestId(/calc/i)).toBeTruthy();

  // Popup should not exists
  expect(screen.queryByTestId(/popup/i)).toBeNull();
});


test("Checking show popup", () => {
  render(<App />);

  const buttonCalc = screen.getByText(/выполнить/i);
  fireEvent.click(buttonCalc);

  // Calc should be exists
  expect(screen.queryByTestId(/calc/i)).toBeTruthy();

  // Popup should be exists
  expect(screen.queryByTestId(/popup/i)).toBeTruthy();

  // checking result
  expect(screen.getByTestId("result")).toHaveTextContent("3");
});


test("Checking close popup", () => {
  render(<App />);

  const buttonCalc = screen.getByText(/выполнить/i);
  fireEvent.click(buttonCalc);

  const buttonClose = screen.getByText(/закрыть/i);
  fireEvent.click(buttonClose);

  // Calc should be exists
  expect(screen.queryByTestId(/calc/i)).toBeTruthy();

  // Popup should not exists
  expect(screen.queryByTestId(/popup/i)).toBeNull();
});


test("Checking show popup after two times calculating", () => {
  render(<App />);

  // Click first time
  let buttonCalc = screen.getByText(/выполнить/i);
  fireEvent.click(buttonCalc);

  // Calc should be exists
  expect(screen.queryByTestId(/calc/i)).toBeTruthy();

  // Popup should be exists
  expect(screen.queryByTestId(/popup/i)).toBeTruthy();

  // Click second time
  buttonCalc = screen.getByText(/выполнить/i);
  fireEvent.click(buttonCalc);

  // Calc should be exists
  expect(screen.queryByTestId(/calc/i)).toBeTruthy();

  // Popup should be exists
  expect(screen.queryByTestId(/popup/i)).toBeTruthy();

  // Checking result
  expect(screen.getByTestId("result")).toHaveTextContent("3, 3");
});


test("Checking calculate result", () => {
  render(<App />);

  // seting another values
  const val1Input = screen.getByLabelText("v1");
  fireEvent.input(val1Input, { target: { value: 5 } });
  expect(val1Input).toHaveValue(5);

  const val2Input = screen.getByLabelText("v2");
  fireEvent.input(val2Input, { target: { value: 10 } });
  expect(val2Input).toHaveValue(10);

  // click for calculatting result
  const buttonCalc = screen.getByText(/выполнить/i);
  fireEvent.click(buttonCalc);

  // checking result
  expect(screen.getByTestId("result")).toHaveTextContent("15");
});
