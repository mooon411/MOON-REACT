import React, { useRef } from "react";
import icon1img from "../../assets/img/icon1.jpg";
import gitHub from "../../assets/img/github.png";
import instaImg from "../../assets/img/insta.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <section id="about" className="container">
        <div className="section_title">
          <h3>● about me</h3>
        </div>
        <div className="about_text reveal reveal_LTR" data-delay="0.5">
          퍼블리셔 2년 경력과 국비 교육 수료를 통해 프론트엔드 개발자로의 전환을
          이루어낸 신입 개발자 문영인입니다.
          <br />
          웹사이트의 시각적인 요소와 사용자 인터페이스에 대한 이해를하고
          프론트엔드 개발에 대한 열정과 지식을 쌓아오며,
          <br />
          새로운 도전을 통해 성장해 나가고 있습니다. 웹 퍼블리싱에서 축적한
          디자인 감각과 프론트엔드 개발 지식을 결합하여
          <br />
          사용자들에게 즐거움과 유용함을 제공하는 웹사이트를 구축하는 것이 저의
          궁극적인 목표입니다.
          <br />
        </div>
        <div className="about_bottom reveal" data-delay="0.6">
          <div className="about_box  reveal reveal_BTT" data-delay="1">
            <div className="about_item">
              <img src={icon1img} alt="moon" />
              <p>
                새로운 기술을 습득하고 혁신적인 아이디어를 추구합니다.
                <br />
                사용자에게 즐거움과 편의를 제공하는 웹을 만들기 위해
                <br />
                열심히 노력하고 있습니다. 함께 미래를 만들어가는
                <br />
                여정에 동참하시겠어요? ✨🚀
              </p>
            </div>
          </div>
          <div className="about_btn">
            <div className="btn_style">
              <a href="https://github.com/mooon411">
                <div className="info">
                  <img src={gitHub} alt="icon" />
                  github
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="btn_style">
              <a href="https://www.instagram.com/zeroin_01/?hl=ko">
                <div className="info">
                  <img src={instaImg} alt="icon" />
                  daily life
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
