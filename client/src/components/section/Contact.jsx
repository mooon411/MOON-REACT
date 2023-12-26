import React from "react";
import phone from "../../assets/img/phone.png";
import email from "../../assets/img/email.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="section_title">
        <h3>● contact</h3>
      </div>
      <div className="contact_main reveal reveal_LTR" data-delay="0.5">
        <p>Waiting for the day when we can be together</p>
      </div>
      <div className="contact_wrap  reveal" data-delay="0.5">
        <div className="contact_text">
          <h4>contact</h4>
          <p>Please contact us anytime. I will be waiting.</p>
        </div>
        <div className="contact_btn">
          <div className="btn_style">
            <a href="mailto:duddls6552@daum.net">
              <div className="info">
                <img src={email} alt="icon" />
                E-mail
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="btn_style">
            <a href="tel:010-7165-9586">
              <div className="info">
                <img src={phone} alt="icon" />
                Tel
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
