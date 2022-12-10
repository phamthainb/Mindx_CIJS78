import React, { useContext } from "react";
import { AppContext } from "./App";

export default function Footer() {
  const data = useContext(AppContext);
  const { lang, setData } = data;
  return (
    <footer className="footer">
      <select
        onChange={(e) => {
          console.log("lang::", e.target.value);
          setData({ ...data, lang: e.target.value });
        }}
      >
        <option value="vi" selected={lang === "vi"}>
          vi
        </option>
        <option value="en" selected={lang === "en"}>
          en
        </option>
      </select>
    </footer>
  );
}
