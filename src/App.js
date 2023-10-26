import logo from "./dictionary logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="logoImage" />
        </header>
        <main>
          <Dictionary defaultKeyword="learn" />
        </main>
        <footer className="text-center">
          {" "}
          This project was coded by &nbsp;
          <a
            href="https://effortless-crepe-2f841e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rosie Miller&nbsp;
          </a>
          and is&nbsp;
          <a
            href="https://github.com/rosiekg123?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub&nbsp;
          </a>
          and hosted on&nbsp;
          <a
            href="https://brilliant-eclair-319c6e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
