import "./App.css";
import Home from "./Pages/Home";
import Project from "../src/Pages/Project";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router basename="/Portfolio">
            <Routes>
                <Route path="/" element= {<Home />}></Route>
                <Route path="projects/:id" element={<Project />} />
            </Routes>
        </Router>
    );
}

export default App;
