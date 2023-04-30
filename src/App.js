import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import ConsultarHoroscopo from "./components/pure/botonConsultar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting></Greeting>
        <ConsultarHoroscopo></ConsultarHoroscopo>
      </header>
    </div>
  );
}

export default App;
