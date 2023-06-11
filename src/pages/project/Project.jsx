import "./Project.css";

const projectInfos = [
    {
        id: 1,
        title: "Manage",
        desc: "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",
        demo: "Live Demo",
    },
    {
        id: 2,
        title: "Fylo",
        desc: "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family.",
        demo: "Live Demo",
    },
    {
        id: 3,
        title: "Insure",
        desc: "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you.",
        demo: "Live Demo",
    },
    {
        id: 4,
        title: "Easybank",
        desc: "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
        demo: "Live Demo",
    },
];

const Card = ({ id, img, title, desc, demo }) => {
    return (
        <div className="project-card flow-content">
            <p>{id}</p>
            <img src={img} alt="project" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <button>{demo}</button>
        </div>
    );
};

const Project = () => {
    return (
        <>
            <section className="project">
                <div className="container flow-content">
                    <h1 className="page-title">Projects</h1>
                    <div className="projects">
                        {projectInfos.map((data) => (
                            <Card
                                key={data.id}
                                title={data.title}
                                desc={data.desc}
                                demo={data.demo}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
