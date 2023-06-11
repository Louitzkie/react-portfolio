import Service from "./Service";
import Hero from "./Hero";
import About from "./About";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Service />
        </>
    );
};

export default Home;
