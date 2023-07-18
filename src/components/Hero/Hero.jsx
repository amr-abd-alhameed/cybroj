import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-main">
            <div className="hero-text">
                <h6 className="hero-subTitle">Welcome To Cyborg</h6>
                <h4 className="hero-title">
                    <em>BROWSE</em>BROWSE OUR POPULAR GAMES HERE
                </h4>
                <div className="main-button">
                    <a href="browse.html">Browse Now</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
