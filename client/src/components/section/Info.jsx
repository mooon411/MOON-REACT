import React from "react";
import PictureDraggable from "../../assets/js/card";

const Info = () => {
  return (
    <section id="info" className="container">
      <div className="section_title">
        <h3>● my info</h3>
      </div>

      <div className="info_img">
        <div className="CardBox">
          <PictureDraggable />
        </div>
      </div>

      <div className="info_list">
        <div className="keyword_area reveal " data-delay="0.5">
          <h4>keyword</h4>
          <div className="keyword_list reveal reveal_BTT" data-delay="0.7">
            <ul>
              <li>매우 강한 호기심</li>
              <li>독특한 발상과 아이디어</li>
              <li>미래지향적</li>
            </ul>
            <ul>
              <li>당차고 경쾌한 성격</li>
              <li>다재다능</li>
              <li>뛰어난 적응력</li>
            </ul>
            <ul>
              <li>새로운 시도</li>
              <li>비판에 대한 수용 능력</li>
              <li>사고의 유연성</li>
            </ul>
            <ul>
              <li>벼락치기 전문가</li>
              <li>리더십</li>
              <li>토론가적 기질</li>
            </ul>
          </div>
        </div>
        <div className="skill_area reveal" data-delay="0.5">
          <h4>SKILL</h4>
          <div className="skill_list reveal reveal_BTT" data-delay="0.7">
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>XD</li>
              <li>Figma</li>
            </ul>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>Jquery</li>
            </ul>
            <ul>
              <li>React</li>
              <li>Vue</li>
              <li>Vite</li>
              <li>Next.js</li>
            </ul>
            <ul>
              <li>mysql</li>
              <li>mongoDB</li>
              <li>mongoose</li>
              <li>php</li>
              <li>node.js</li>
            </ul>
          </div>
        </div>
        <div className="career_area reveal " data-delay="0.5">
          <h4>CAREER</h4>
          <div className="career_list  reveal reveal_BTT" data-delay="0.7">
            <ul>
              <li>
                <em>살구뉴스</em>
                <p>콘텐츠 에디터 / 웹디자이너 (근무)</p>
                <span>2020.08 ~ 2021.02</span>
              </li>
              <li>
                <em>라인컴퓨터아트학원</em>
                <p>JAVA기반 스마트웹 디지털컨버젼스 (수료)</p>
                <span>2020.12 ~ 2021.06</span>
              </li>
              <li>
                <em>잠보소프트</em>
                <p>기획자 / 웹퍼블리셔 (근무)</p>
                <span>2021.07 ~ 2023.08</span>
              </li>
              <li>
                <em>라인컴퓨터아트학원</em>
                <p>JAVA기반 스마트웹&앱 개발자 양성 (수료)</p>
                <span>2023.09 ~ 2024.02</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
