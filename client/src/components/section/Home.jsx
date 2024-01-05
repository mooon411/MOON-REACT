import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Three from "./Three";

const Home = () => {
  return (
    <>
      <section id="home">
        <div>
          <h1 className="main_title reveal reveal_BTT" data-delay="0.6">
            Creative
            <br />
            Developer
          </h1>
          <div className="intro_text reveal reveal_LTR" data-delay="0.9">
            <h3>Ideas into Code !</h3>
            <p>
              웹 퍼블리싱 2년 이상의 다채로운 경험, 과거의 노하우를 바탕으로
              사용자 경험(UX)을 중시하는 창의적이고 혁신적인 웹 프론트엔드
              개발자가 될 것입니다:)
            </p>
            <a href="#port">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <Three />
      </section>
    </>
  );
};

export default Home;
