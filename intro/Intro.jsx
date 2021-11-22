import "./intro.css"
import MAN from "../../img/MAN.jpg"
const Intro = () => {
    return (
        <div className="intro-container">
            <div className="container-left">
                <div className="container-left-wrapper">
                    <h1 className="intro">Hello! Hk's Coding</h1>
                    <h2 className="container-name">Would you like to be a perfect Full Stack Web Developer</h2>
                    <div className="container-title">
                        <div className="title-wrapper">
                            <div className="container-title-item">Web Developer</div>
                            <div className="container-title-item">Softwear Developer</div>
                            <div className="container-title-item">Digital Marketing</div>
                            <div className="container-title-item">E-Commerce</div>
                            <div className="container-title-item">Freelancing</div>
                        </div>
                    </div>
                    <p className="p-description">
                        Web Developer responsibilities include: Writing well designed, testable, efficient code by using best software development practices; Creating website
                </p>
                </div>
                
            </div>
            <div className="container-right">
                <div className="p-bg"></div>
                <img src={MAN} alt="" className="image-contain" />
            </div>

        </div>
    );
};
export default Intro;