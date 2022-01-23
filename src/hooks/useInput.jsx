import React, { useState, useCallback } from "react";

const useInput = (initialValue, name) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(parseFloat(e.target.value));
  }, []);

  const content = (
    <input
      value={value}
      name={name}
      aria-label={name}
      type="number"
      onChange={onChange}
    />
  );
  return [value, content];
};

export default useInput;
