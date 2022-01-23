import React, { render, screen, fireEvent } from "@testing-library/react";
import Popup from "./index";

const initText = "1, 2, 3";
test("Check init Popup", () => {
  render(
    <Popup
      text={initText}
    />);

  const text = screen.getByText(initText);
  expect(text).toBeInTheDocument();
  expect(screen.getByTestId("result")).toHaveTextContent(initText);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Check close Popup", () => {
  const onClose = jest.fn();
  render(
    <Popup
      text={initText}
      onClose={onClose}
    />);

  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(onClose).toHaveBeenCalledTimes(1);
});
