import React, { useEffect, useState } from "react";

export default function BannerFun() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
  }, [number]);

  const onClickBtn = (e) => {
    console.log("cliked Banner Fun");
    setNumber(number + 1);
  };

  return (
    <section id="welcome-section" className="welcome-section">
      <h1>{number}</h1>
      <h1>Hey I am mindXer </h1>
      <p>A Full Stack Web Developer</p>
      <button onClick={onClickBtn}>Banner Fun</button>
    </section>
  );
}
