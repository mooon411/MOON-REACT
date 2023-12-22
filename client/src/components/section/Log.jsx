import React from "react";
const imagePaths = {
  log01Img: "../../assets/img/log01.jpg",
  log02Img: "../../../assets/img/log02.jpg",
  log03Img: "/assets/img/log03.jpg",
  log04Img: "./assets/img/log04.jpg",
  log05Img: "../assets/img/log05.jpg",
};

const Log = () => {
  return (
    <>
      <section id="log" className="container">
        <div className="section_title">
          <h3>● developer log</h3>
        </div>
        <div className="log_text reveal reveal_TTB" data-delay="0.5">
          최근 6개월 동안 개발자로 성장하기 위해 노력한 순간을 사진으로
          소개합니다.
          <br />
          매달 팀 프로젝트를 진행하며 협업하고 집중하는 수업 환경, 건강한 식단과
          함께하는 바른생활 그리고
          <br />
          색다른 아이디어를 찾아내는 쉼과 창의력이 담긴 순간들입니다.
          <br />이 모든 순간들이 저에게 끊임없는 열정과 개발자로 성장하기 위한
          여정을 함께한 소중한 기억입니다.
        </div>
        <div className="log_moment">
          <ul className="line_one">
            <li>
              <div className="log_img">
                <img src={imagePaths.log01Img} alt="log_moment" />
              </div>
              <p>steady development</p>
            </li>
            <li>
              <div className="log_img">
                <img src={imagePaths.log02Img} alt="log_moment" />
              </div>
              <p>effort and passion</p>
            </li>
          </ul>
          <ul className="line_two">
            <li>
              <div className="log_img">
                <img src={imagePaths.log03Img} alt="log_moment" />
              </div>
              <p>rest breathing</p>
            </li>
            <li>
              <div className="log_img">
                <img src={imagePaths.log04Img} alt="log_moment" />
              </div>
              <p>healthy food</p>
            </li>
            <li>
              <div className="log_img">
                <img src={imagePaths.log05Img} alt="log_moment" />
              </div>
              <p>health</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Log;
