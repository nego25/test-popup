import React, { render, screen, fireEvent } from "@testing-library/react";
import Calc from "./index";

const value1 = 1;
const value2 = 2;
test("Check init Calc", () => {
  render(
    <Calc
      value1={value1}
      value2={value2}
    />);

  // const val1Input = screen.getByRole("spinbutton", { name: "v1" });
  const val1Input = screen.getByLabelText("v1");
  expect(val1Input).toBeInTheDocument();
  expect(val1Input).toHaveValue(value1);

  // const val2Input = screen.getByRole("spinbutton", { name: "v2" });
  const val2Input = screen.getByLabelText("v2");
  expect(val2Input).toBeInTheDocument();
  expect(val2Input).toHaveValue(value2);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Check calculatting result", () => {
  const handleClick = jest.fn();
  render(
    <Calc
      value1={value1}
      value2={value2}
      onChangeResult={handleClick}
    />);

  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledWith(value1 + value2);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
