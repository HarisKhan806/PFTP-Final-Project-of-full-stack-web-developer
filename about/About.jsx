import "./about.css"
import UX from "../../img/UX.jpg"
import DESIGN from "../../img/DESIGN.jpg"
const About = () => {
    return (
        <div className="about-container">
            <div className="about-left">
                <div className="card-left-c bg"></div>
                <div className="card-left-c">
                    <img src={UX} alt="" className="about-image" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-intro">
                    I am an undergraduate student from Benazir bhutto shaheed University Lyari
                    so soon Insha Allah I will be Acheive my Goal!
                </p>
                <p className="about-description">
                  <b>Allah is the Best Planner </b>   Often in our lives, we get stuck at a point where we question our fate, why me? The answer is always hidden in Allah’s wisdom.
                </p>
                <div className="about-image">
                    <img src={DESIGN} alt="" className="about-islam" />
                </div>
                <div className="short">
                    <p><b>Skills</b> is the most popular way of creating a standard path....</p>
                </div>
                
            </div>
        </div>
    );
}
export default About;