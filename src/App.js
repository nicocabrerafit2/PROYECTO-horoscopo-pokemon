import logo from "./logo.svg";
import "./App.css";
import NuevosUsuarios from "./components/container/componenteB";
import TaskListComponent from "../src/components/container/task_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskListComponent></TaskListComponent>
        <NuevosUsuarios></NuevosUsuarios>
      </header>
    </div>
  );
}

export default App;
