import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <section>
          <h3> {props.meaning.partOfSpeech}</h3>
          <p className="definition">
            {" "}
            <strong> Definition: </strong> {props.meaning.definition}
            <br />
            <em>Example: {props.meaning.example}</em>
          </p>
          <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
