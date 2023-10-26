import React from "react";
import "./Meaning.css";

export default function meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      <p>
        {" "}
        {props.meaning.definition}
        <br />
        <em>{props.meaning.example}</em>
      </p>
      <br />
      <br />
    </div>
  );
}
