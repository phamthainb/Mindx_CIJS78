import React, { useState } from "react";

/**
 *
 * 2 cach
 * -  setState lai src cua <img />
 * -  setState lai style -> display: none cua <img />
 */

const xanh =
    "https://porsche-vietnam.vn/wp-content/uploads/2020/08/j1-taycan-4s-modelimage-sideshot-1600x900.png",
  hong =
    "https://porsche-vietnam.vn/wp-content/uploads/2021/01/j1-taycan-modelimage-sideshot.png";

export function BTVN1() {
  // cach 1
  const [linkUrl, setLinkUrl] = useState(xanh);
  console.log(linkUrl);

  return (
    <div>
      <img style={{ width: "100%" }} src={linkUrl} alt="car photos" />

      <div className="btn">
        <button
          onClick={() => {
            setLinkUrl(hong);
          }}
        >
          Mau Hong
        </button>
        <button
          onClick={() => {
            setLinkUrl(xanh);
          }}
        >
          Mau Xanh
        </button>
      </div>
    </div>
  );
}

export default function BTVN() {
  // cach 2
  const [color, setColor] = useState(true); 
  // true: xanh, false: hong
  console.log("color::", color);

  return (
    <div>
      <img
        style={{ width: "100%", display: color ? "block" : "none" }}
        src={xanh}
        alt="car photos"
      />
      <img
        style={{ width: "100%", display: color ? "none" : "block" }}
        src={hong}
        alt="car photos"
      />

      <div className="btn">
        <button
          onClick={() => {
            setColor(false);
          }}
        >
          Mau Hong
        </button>
        <button
          onClick={() => {
            setColor(true);
          }}
        >
          Mau Xanh
        </button>
      </div>
    </div>
  );
}
