import React from "react";
import "./Results.css";
import Meaning from "./Meaning.js";

export default function results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <p className="Phonetic"> Phonetic: /{props.results.phonetic}/</p>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                {" "}
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
