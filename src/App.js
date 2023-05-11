import logo from "./logo.svg";
import "./App.css";
import NuevosUsuarios from "./components/container/componenteB";
import TaskListComponent from "../src/components/container/task_list";
import Ejemplo1 from "./hooks/ejemplo1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent>*/}
        {/* <NuevosUsuarios></NuevosUsuarios>*/}
        <Ejemplo1></Ejemplo1>
      </header>
    </div>
  );
}

export default App;
