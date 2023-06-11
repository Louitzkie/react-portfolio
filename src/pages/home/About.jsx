import resume from "./Louis Andrie Cruz - Resume.pdf";
import "./About.css";

const About = () => {
    return (
        <>
            <section className="about-me ">
                <div className="container flow-content">
                    <div className="about-me__content flow-content">
                        <h1 className="page-title">About me</h1>
                        <h2>Get to know me a little</h2>
                        <p>
                            Hi i am Louis Andrie Cruz an aspiring self taught
                            developer building website is my absolute passion
                            and happiness when i see it live online.
                        </p>
                        <a
                            download="Louis Andrie Cruz - Resume"
                            href={resume}
                            target="_blank"
                            className="cv"
                            title="Resume/CV"
                        >
                            Resume
                        </a>
                    </div>

                    <div className=" flex">
                        <div className="about-me__skills">
                            <h2>Skills</h2>
                            <ul>
                                <li>Html5</li>
                                <li>Css3</li>
                                <li>JavaScript</li>
                                <li>ReactJs</li>
                            </ul>
                        </div>
                        <div className="about-me__tools">
                            <h2>Tools</h2>
                            <ul>
                                <li>Adobe Photoshop</li>
                                <li>Blender</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
