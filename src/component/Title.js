import React from "react";
import "./Title.css";
export default function Title(props) {
  return (
    <div className="title-block">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}