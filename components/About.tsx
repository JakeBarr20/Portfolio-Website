import Scroller from "./Scroller";

const About: React.FC = () => {
    return (
        <div className="about-wrapper">
            <div className="about-left">
                <div className="name">
                    <div className="red-square"></div>
                    <h1>Jake Biddiscombe-Barr</h1>
                </div>
                <p className="bio">A First Class <span className="bio-red">Royal Holloway University</span> graduate with a passion for Web Development.</p>
                <div className="about-info">
                    <p className="info-header">DoB:</p>
                    <p>19/02/2002</p>
                </div>
                <div className="about-info">
                    <p className="info-header">Location:</p>
                    <p>London</p>
                </div>
                <div className="about-info">
                    <p className="info-header">Email:</p>
                    <p>jakebiddibarr@hotmail.com</p>
                </div>
                <div className="about-info">
                    <p className="info-header">Phone Number:</p>
                    <p>07422549302</p>
                </div>
            </div>
            <Scroller></Scroller>
        </div>
    )
}

export default About;