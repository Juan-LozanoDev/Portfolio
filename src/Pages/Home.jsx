import Header from "../components/Header";
import Aboutme from "../components/Aboutme";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Presentation from "../components/Presentation";

function Home() {
    return (
        <>
            <Header></Header>
            <main>
                <Presentation></Presentation>
                <Aboutme></Aboutme>
                <Skills></Skills>
                <Projects></Projects>
                <ContactMe></ContactMe>
            </main>
        </>
    );
}

export default Home;
