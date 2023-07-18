import "./App.css";
import { Header, Footer } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home/Home";
import { Home, About } from "./Pages/index";
const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default App;
