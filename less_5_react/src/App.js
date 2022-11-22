import React, { useState } from "react"; //-> jsx
// Event: onClick, onBlur, onChange
/**
 * onClick: (event: MouseEvent<T, globalThis.MouseEvent>) => void
 *
 */
function App() {
  return (
    <div className="App">
      {/* <Buttons /> */}
      <Inputs />
    </div>
  );
}

// onChange:
/**
 * input -> onChange ->
 * -> store value -> state
 * -> value length -> hiển thị độ dài của input value
 * ->
 */
const Inputs = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        id="input1"
        type="text"
        onChange={(event) => {
          // console.log("input::", event);
          console.log("input::target", event.target.value);
          //
          setText(event.target.value)
        }}
      />
      <p>Length: {text.length}</p>
    </div>
  );
};

function Buttons() {
  return (
    <div>
      {" "}
      <button
        onClick={(event) => {
          console.log("clicked", event);
        }}
      >
        click meeeeee
      </button>
      <button
        onClick={(event) => {
          console.log("clicked", event);
        }}
      >
        click meeeeee
      </button>
      <button
        onClick={(event) => {
          console.log("clicked", event);
        }}
      >
        click meeeeee
      </button>
      <button
        onClick={(event) => {
          console.log("clicked", event);
        }}
      >
        click meeeeee
      </button>
      <button
        onClick={(event) => {
          // event: thong
          console.log("clicked", event);
        }}
      >
        click meeeeee
      </button>
      <button
        onClick={(event) => {
          console.log("clicked", event);
        }}
      >
        click meeeeee
      </button>
      <button
        onClick={(event) => {
          console.log("clicked", event);
        }}
      >
        click meeeeee
      </button>
    </div>
  );
}

export default App;
