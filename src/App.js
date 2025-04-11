import { Route, Routes } from "react-router-dom";
import "./App.css";
import TaskList from "./pages/TaskList";
import Header from "./components/Header";
import HomeBlock from "./components/HomeBlock";
import WebSite from "./pages/WebSite";
import Example from "./pages/Example";
import Counter from "./pages/Example2";

function App() {
  return (
    <div className="App">
      <HomeBlock />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/website" element={<WebSite />} />
      </Routes>
    </div>
  );
}

export default App;
