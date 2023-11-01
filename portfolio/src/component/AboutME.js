import React from 'react'
import '../css/AboutME.scss';
import yub1 from '../img/yubeen.jpg'
import yub2 from '../img/yubeen2.jpg'

function AboutME() {
    return (
        <>
            <div className='row me'>
                {/* <img src={yub1}/> */}
                <img src={yub2}/>
                <div>
                    <ul>
                        <div className='title'>안녕하세요, 프론트엔드 민유빈입니다.</div>
                        <li>저는 덕성여자대학교에서 IT미디어공학을 전공하며 웹 개발 및 디자인에 대한 깊은 흥미를 가지고 있습니다.</li>
                        <li>작년에는 다양한 프로젝트에서 기획 및 디자인 파트로 활동하며, 사용자 중심의 디자인을 구현하고 웹 개발에 접목시키는 역할을 수행하였습니다. 이를 통해 사용자 경험을 최적화하고 서비스의 성능을 향상시키는 디자인에 대해 배우고 생각해볼 수 있었습니다.</li>
                        <li>올해는 프론트엔드 양성과정을 수강하며 React, Html/Css, JavaScript, Next 등을 학습하고 있습니다. 저는 사용자와 인터랙션이 가능하면서도 경쟁력 있는 기능을 가지고 있으며, 동시에 시각적으로 매력적인 웹 서비스 개발을 희망합니다.</li>
                        <li>제가 가진 여러 경험과 능력을 더해 의미있는 프로젝트를 진행하며 함께 성장할 수 있으면 좋겠습니다. 감사합니다 (｡•̀ᴗ-)</li>
                    </ul>
                    <ul>
                        <div className='title'>학력</div>
                        <li>덕성여자대학교 IT미디어공학전공 3학년 (끝나고 휴학 중)</li>
                    </ul>
                    <ul>
                        <div className='title'>활동</div>
                        <li>해커톤연합동아리 구름톤 UNIV 1기 프론트엔드</li>
                        <li>프로젝트 기반 프론트엔드(React,Vue) 웹&앱 SW 개발자 양성과정 11기 수강</li>
                        <li>IT연합동아리 멋쟁이사자처럼 11기 프론트엔드 운영진</li>
                        <li>덕성여자대학교 덕성해커톤 1회 주관 및 진행</li>
                        <li>덕성여자대학교 커리어서포터즈 19/20기 디자인팀</li>
                        <li>IT연합동아리 멋쟁이사자처럼 10기 기획/디자인</li>
                        <li>덕성여자대학교 IT미디어공학전공 제 17/18대 학생회장</li>
                        <li>덕성여자대학교 과학기술대학 학생회 자명</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutME