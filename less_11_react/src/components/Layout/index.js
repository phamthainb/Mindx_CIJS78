import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="body">{props.children}</div>
      <Footer />
    </>
  );
}
