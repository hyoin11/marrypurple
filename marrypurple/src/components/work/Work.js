import React from 'react';
import '../../lib/styles/work.scss';
import headerImg1 from '../../lib/images/icon/e4abb78c96f47624b9744bc156d7a4c9.png';
import headerImg2 from '../../lib/images/icon/6bf9cc98add48255195a75bdf7057eee.png';
import menu1Img1 from '../../lib/images/icon/a8143f7a1037d59a71d613621b835539.png';
import menu1Img2 from '../../lib/images/icon/8ed07696477f751bedb268fbcabeb627.png';
import menu1Img3 from '../../lib/images/icon/c019a8e459fbfc00394fb9634129350b.png';
import menu1Img4 from '../../lib/images/icon/1c8956fcf7d8ae90fa302316d281ebd1.png';
import menu2Img1 from '../../lib/images/icon/cf099b01bbc84cb8e9ed0986a29f73a4.png';
import menu3Img1 from '../../lib/images/icon/7f1ea73499c69f4dbb415a7cbf577ce6.png';
import contentImg from '../../lib/images/icon/514b07e13c210c48a1abf8fc906b7e9d.png';

const Work = () => {
    return (
        <>
            <div id="work_wrap">
                <div id="work_header">
                    <div>
                        <img src={headerImg1} alt="icon"/>
                    </div>
                    <div>
                        <div id="work_header_title">
                            <span>회의록</span>
                        </div>
                        <div id="work_header_menu">
                            <span>파일</span>
                            <span>수정</span>
                            <span>보기</span>
                            <span>삽입</span>
                            <span>슬라이드</span>
                            <span>도구</span>
                            <span>퓨전 테이블</span>
                            <span>도움말</span>
                        </div>
                    </div>
                    <div>
                        <img src={headerImg2} alt="icon"/>
                        <span>근무 모드</span>
                    </div>
                </div>
                <div id="work_nemu">
                    <div id="work_nemu1">
                        <div>
                            <img src={menu1Img1} alt="icon"/>
                        </div>
                        <div>
                            <span>100%</span>
                            <img src={menu1Img2} alt="icon"/>
                        </div>
                        <div>
                            <span>16</span>
                            <img src={menu1Img2} alt="icon"/>
                        </div>
                        <div>
                            <img src={menu1Img3} alt="icon"/>
                            <img src={menu1Img2} alt="icon"/>
                        </div>
                        <div>
                            <img src={menu1Img4} alt="icon"/>
                        </div>
                    </div>
                    <div id="work_nemu2">
                        <img src={menu2Img1} alt="icon"/>
                        <span>수정 중...</span>
                        <img src={menu1Img2} alt="icon"/>
                    </div>
                </div>
                <div id="work_nemu3">
                    <div><img src={menu3Img1} alt="icon"/></div>
                </div>
                <div id="work_content">
                    <div id="work_content_box">
                        <img src={contentImg} alt="icon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;