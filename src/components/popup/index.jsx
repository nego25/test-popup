import React, { useCallback } from "react";

import "./css/index.scss";

const Popup = ({ text, onClose }) => {
  const onClickToClose = useCallback(() => {
    onClose();
  }, []);

  return (
    <div className="popup" data-testid="popup">
      <div className="popup-content">
        <div className="results-wrapper">
          <span className="results-text" data-testid="result">
            {text}
          </span>
        </div>
        <div className="close-button-wrapper">
          <div
            className="button"
            role="button"
            onClick={onClickToClose}
          >
            <span>Закрыть</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
