import "./App.css";
import Body from "./Body";
import BtnClick from "./BtnClick";
import Footer from "./Footer";
import Header from "./Header";

// class -> className
// id -> id
//
// HTML 100btn
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})
// window.addEventListener("onclick", (e) => {...})

// app.js
// window.addEventListener("onchange", (e) => {

// });

function App() {
  return (
    <div className="App">
      {/* // html */}
      <input
        name="usernamex"
        id="usernamex"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />

      <BtnClick />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
