import { useGlobalContext } from "../services/Context";

function QualificationsList() {
    const {qualifications} = useGlobalContext()

    return (
        <ul className="listOfQualifications">
            {qualifications.map((qualification) => (
                <li className="qualification" key={qualification.Title}>
                    <img src={qualification.Image} alt={qualification.Title} />
                    <h3>{qualification.Title}</h3>
                </li>
            ))}
        </ul>
    );
}

export default QualificationsList;
