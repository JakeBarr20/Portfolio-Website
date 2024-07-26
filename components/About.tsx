import Scroller from "./Scroller";
import Image from "next/image";
import Me from "../app/portfolio-img.png"

const About: React.FC = () => {
    return (
        <div className="about-wrapper">
            <div className="about-left">
                <h1>Jake Biddiscombe-Barr</h1>
                <div className="info-wrapper">
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
            </div>
            <div className="about-right">
                <div className="blur"></div>
                <Image priority src={Me} alt="me"></Image>
            </div>
            <Scroller></Scroller>
        </div>
    )
}

export default About;