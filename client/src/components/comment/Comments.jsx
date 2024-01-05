import React from "react";
import comment01Img from "../../assets/img/daily1.jpg";
import comment02Img from "../../assets/img/daily2.jpg";
import comment03Img from "../../assets/img/daily3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Comments = () => {
  return (
    <section id="talk" className="container">
      <div className="section_title">
        <h3>● comment</h3>
      </div>
      <div className="comment_wrap">
        <ul>
          <li id="commentN01">
            <div className="comment_img">
              <img src={comment01Img} alt="daily1" />
            </div>
            <div className="comment_write">
              <label htmlFor="write" className="blind">
                COMMENT01
              </label>
              <input id="write" type="text" placeholder="COMMENT" />
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="comments">
              <ul>
                <li>좋은 말입니다.</li>
                <li>good</li>
                <li>잘 보고 갑니다.</li>
                <li>It's a quote from Benjamin Franklin.</li>
              </ul>
            </div>
          </li>
          <li id="commentN02">
            <div className="comment_img">
              <img src={comment02Img} alt="daily2" />
            </div>
            <div className="comment_write">
              <label htmlFor="write" className="blind">
                COMMENT02
              </label>
              <input id="write" type="text" placeholder="COMMENT" />
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="comments">
              <ul>
                <li>잘보고 감</li>
                <li>날씨가 많이 춥습니다. 감기 조심하세요 ~</li>
                <li>good</li>
              </ul>
            </div>
          </li>
          <li id="commentN03">
            <div className="comment_img">
              <img src={comment03Img} alt="daily3" />
            </div>
            <div className="comment_write">
              <label htmlFor="write" className="blind">
                COMMENT03
              </label>
              <input id="write" type="text" placeholder="COMMENT" />
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="comments">
              <ul>
                <li>멋진 프론트엔드 개발자가 되길 바랍니다.</li>
                <li>반가워요</li>
                <li>ㅋㅋ</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Comments;
