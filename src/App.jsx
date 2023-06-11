import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Project, Contact } from "./pages";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
