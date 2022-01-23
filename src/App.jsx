import React, { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

import { Calc, Popup } from "./components";

const App = () => {
  const value1 = 1;
  const value2 = 2;
  const [results, setResults] = useState([]);
  const [isShowResults, setIsShowResults] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setIsShowResults(true);
    }
  }, [results.length]);
  
  const onChangeResult = useCallback((newRes) => {
    setResults((results) => {
      return [...results, newRes];
    });
    // setIsShowResults(true);
  }, []);

  const onClosePopup = useCallback(() => {
    setIsShowResults(false);
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <Calc
          value1={value1}
          value2={value2}
          onChangeResult={onChangeResult}
        />
      </div>
      {isShowResults &&
        <Popup
          text={results.join(", ")}
          onClose={onClosePopup}
        />
      }
    </div>
  );
};

export default App;
