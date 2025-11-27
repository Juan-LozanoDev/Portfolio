import { useGlobalContext } from "../services/Context";

function SkillsList() {
    const {skills} = useGlobalContext()
    return (
        <ul className="ListOfSkills">
            {skills.map((skill) => (
                <li className="Skill" key={skill.Title}>
                    <img src={skill.Logo} alt={skill.Title} />
                    <h3>{skill.Title}</h3>
                    <p>{skill.Description}</p>
                </li>
            ))}
        </ul>
    );
}

export default SkillsList;
