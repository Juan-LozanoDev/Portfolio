import { useState } from "react";
import "../styles/Projects.css";
import ProjectList from "./ProjectList";
import QualificationsList from "./QualificationsList";


export default function Projects() {
    const [selected, setSelected] = useState("Projects");

    const handleProjects = (e) => {
        if (selected === "Projects") {
            return;
        }
        setSelected("Projects");
    };

    const handleQualifications = (e) => {
        if (selected === "Qualifications") {
            return;
        }
        setSelected("Qualifications");
    };

    return (
        <section id="Projects">
            <div className="selection">
                <div className='projects' onClick={handleProjects}>
                    <div className={selected === "Projects" ? "selected" : "not-selected"} style={{"--i": 1}}></div>
                    <h2>Projects</h2>
                </div>
                <div
                    className="qualifications"
                    onClick={handleQualifications}
                >
                    <div className={selected === "Qualifications" ? "selected" : "not-selected"} style={{"--i": -1}}></div>
                    <h2>Qualifications</h2>
                </div>
            </div>
            <div className="cards">
                {selected === "Projects" ? (
                    <ProjectList />
                ) : (
                    <QualificationsList />
                )}
            </div>
        </section>
    );
}
