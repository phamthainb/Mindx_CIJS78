import React, { useContext } from "react";
import { AppContext, languTranslate } from "./App";

export default function Body() {
  const data = useContext(AppContext);
  const { lang, setData } = data;

  return (
    <div className="body">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("username::", e.target.username.value);
          setData({ ...data, username: e.target.username.value });
        }}
      >
        <label className="form_label">{languTranslate[lang].form_label}</label>
        <div className="form_content">
          <input
            name="username"
            type="text"
            placeholder={languTranslate[lang].form_placeholder}
          />
          <button>{languTranslate[lang].form_btn}</button>
        </div>
      </form>
    </div>
  );
}
