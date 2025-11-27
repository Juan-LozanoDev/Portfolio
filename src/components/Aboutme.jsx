import "../styles/Aboutme.css";
import Photo2 from "/Images/Photos/Photo2.jpg";

export default function Aboutme() {
    return (
        <>
            <section id="AboutMe">
                <h2 className="titles">About Me</h2>
                <div id="about">
                    <img src={Photo2} alt="Me2" />
                    <p>
                        Software Development Specialist with experience in HTML, CSS, JavaScript, React, Tailwind, Node
                        JS, Express, SQL, and PostgreSQL. Currently expanding knowledge in Full Stack Development.
                        Passionate about technology, self-learning, and creating innovative solutions. Advanced English
                        level with strong technical communication skills.
                    </p>
                </div>
            </section>
        </>
    );
}
