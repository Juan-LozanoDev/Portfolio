import "../styles/Presentation.css";
import Photo1 from "/Images/Photos/Photo1.jpg";

export default function Presentation() {
  return (
    <>
      <section id="Presentation">
        <div id="container">
          <div className="description">
            <h1>Hi! I'm Juan Lozano</h1>
            <p>
              I'm a Front-End developer, currently training to become a Full Stack Developer. I'm passionate about
              building modern, user-friendly web applications, and I'm always looking for new ways to improve my skills.
            </p>
          </div>
          <img src={Photo1} alt="Me" />
        </div>
      </section>
    </>
  );
}
