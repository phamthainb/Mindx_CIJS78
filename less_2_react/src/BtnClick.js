import React from "react";

export default function BtnClick() {
    // alert, log, 
    // logic chia nhỏ -> dễ control -> debug dẽ dàng hơn
    
  return (
    <button
      onClick={(e) => {
        console.log("event::", e);
        alert("Clicked")
      }}
    >
      click me
    </button>
  );
}
