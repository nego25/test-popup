import { render, screen, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import useInput from "./useInput";

const value = 5;
const name = "val1";
const newValue = 10;

const setup = (el) => {
  const utils = render(el);
  // console.log("utils", utils);
  const input = screen.getByRole("spinbutton");
  return {
    input,
    ...utils,
  };
};

test("check init input hook", () => {
  const { result } = renderHook(() => {
    return useInput(value, name);
  });

  const [val, inputEl]  = result.current;

  expect(val).toBe(value);
  expect(typeof inputEl).toBe("object");
  // expect(inputEl.type).toBe("input");
});

test("check onChange input hook", () => {
  const { result } = renderHook(() => {
    return useInput(value, name);
  });

  const [, inputEl]  = result.current;

  const { input } = setup(inputEl);
  act(() => {
    fireEvent.change(input, { target: { value: newValue } });
  });

  const [val]  = result.current;
  expect(val).toBe(newValue);
});
