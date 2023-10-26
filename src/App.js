import logo from "./dictionary logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="img-fluid" />
        </header>
        <main>
          <Dictionary defaultKeyword="learn" />
        </main>
        <footer className="text-center"> Coded by Rosie Miller</footer>
      </div>
    </div>
  );
}

export default App;
