import React, { useCallback } from "react";
import useInput from "../../hooks/useInput";

import "./css/index.scss";

const Calc = ({ value1, value2, onChangeResult }) => {
  const [val1, val1Input] = useInput(value1, "v1");
  const [val2, val2Input] = useInput(value2, "v2");

  const calcResult = (v1, v2) => {
    return v1 + v2;
  };

  const onClickToCalc = useCallback(() => {
    return onChangeResult(calcResult(val1, val2));
  // }, [value1, value2, onChangeResult]);
  }, [val1, val2, onChangeResult]);

  return (
    <div className="calc" data-testid="calc">
      <div className="values-wrapper">
        {val1Input}
        {val2Input}
      </div>
      <div className="calc-button-wrapper">
        <div
          role="button"
          className="button"
          onClick={onClickToCalc}
        >
          <span>Выполнить</span>
        </div>
      </div>
    </div>
  );
};

export default Calc;
