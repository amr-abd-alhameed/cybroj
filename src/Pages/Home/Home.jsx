import "./Home.css";

import { Container, Hero, MostPopular } from "../../components/index.jsx";
const Home = () => {
    return (
        <>
            <Container>
                <Hero />
                <MostPopular />
            </Container>
        </>
    );
};

export default Home;
