import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title"> Let's discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={phone} alt="" className="contact-img" />
                            +92 3490802499
                        </div>
                        <div className="contact-info-item">
                            <img src={address} alt="" className="contact-img" />
                            House No 1110 Street No 02 Bhutta Village Keamari Karachi
                        </div>
                        <div className="contact-info-item">
                            <img src={email} alt="" className="contact-img" />
                            Hk806344@gmail.com  
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form>
                        <input type="text" placeholder="
                        Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea name="message" id="" cols="30" rows="5"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;