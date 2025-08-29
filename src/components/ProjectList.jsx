import { Link } from "react-router-dom";
import ShareIcon from "../assets/Icons/Share-icon.svg";
import { useGlobalContext } from "../services/Context";


function ProjectList() {
    const { projects } = useGlobalContext();
    

    return (
        <ul className="listOfProjects">
            {projects.map((project) => (
                <li className="project" key={project.Title}>
                    <img src={project.Image} alt={project.Title} />
                    <h3>{project.Title}</h3>
                    <span className="project-description">
                        <p>{`${project.Description.substring(0, 55)}...`}</p>
                    </span>
                    <span className="more-information">
                        <a href={project.Url} className="live-demo">
                            Live Demo <img src={ShareIcon} alt="->" className="share-icon" />
                        </a>
                        <Link to={`/projects/${project.id}`} className="details" >
                            Details
                        </Link>
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default ProjectList;
