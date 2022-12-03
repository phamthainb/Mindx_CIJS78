import React from "react";

export default function Modal({ active, setActive, content, callback }) {
  return (
    <div className="modal_wrap">
      <div className="modal_value">
        <div className="modal_content">{content}</div>
        <div className="modal_btns">
          <button
            onClick={() => {
              setActive(false);
            }}
          >
            close
          </button>
          
          <button
            onClick={() => {
              callback();
            }}
          >
            approve
          </button>
        </div>
      </div>
    </div>
  );
}
