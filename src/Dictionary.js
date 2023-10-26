import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //API Documentation - https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `664efb8a30c957f12bbot9a042bca6c7`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "LxhTVgd7ErMXPhnV4lRVAEJlxnKZlKjkC783KQBqcBYTDO9Z1YNjsDU3";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1> Dictionary App</h1>
        <br />
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="Search for definition"
              defaultValue={props.defaultKeyword}
            />
            <button type="submit"> Search </button>
          </form>
        </section>
        <br />
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
