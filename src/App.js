import { Route, Routes } from "react-router-dom";
import "./App.css";
import TaskList from "./pages/TaskList";
import Header from "./components/Header";
import HomeBlock from "./components/HomeBlock";

function App() {
  return (
    <div className="App">
      <HomeBlock />
      <Routes><Route path="/" element={<Header />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;
