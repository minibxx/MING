import React from 'react'
import yub1 from '../img/yubeen profile.png'
import yub2 from '../img/yubeen2.jpg'

function AboutME() {
    return (
        <div className='w-[80%] m-[auto] '>
            <div className='flex justify-between mt-[50px]'>
                <div className='w-[15%]'>
                    {/* <img src={yub2}/> */}
                    <img src={yub1} />
                </div>

                <ul className='w-[80%] flex flex-col gap-[3%]'>
                    <div className='font-bold text-[20px] mb-[10px] '>안녕하세요. 경험하며 성장하는 프론트엔드 개발자, 민유빈입니다.</div>
                    <li>저는 덕성여자대학교에서 IT미디어공학을 전공하며 <span className='bg-[#FFF8D9]'>웹 개발 및 UX 디자인</span>에 대한 깊은 흥미를 가지고 있습니다.</li>
                        <li>동아리에서 참여한 다양한 프로젝트에서 기획 및 디자인 파트로 활동하며, 사용자 중심의 디자인을 구현하고 웹 개발에
                        접목시키는 역할을 수행하였습니다. <br/>이를 통해 사용자 경험을 최적화하고 서비스의 성능을 향상시키는 디자인에
                        대해 배우고 생각해볼 수 있었습니다.</li>
                    <li>프론트엔드 양성과정을 수강하며 React, Html/Css, JavaScript, Next 등을 학습하고 한 경험이 있습니다. <br/>저는 사용자와
                        <span className='font-semibold'> 인터랙션</span>이 가능하면서도 경쟁력 있는 기능을 가지고 있으며, 동시에 <span className='font-semibold'> 시각적으로 매력적인</span> 웹 서비스 개발을 희망합니다.</li>
                    <li>제가 가진 여러 경험과 능력을 더해 의미있는 프로젝트를 진행하며 함께 성장할 수 있으면 좋겠습니다. 감사합니다 (｡•̀ᴗ-)</li>
                </ul>
               
            </div>
            <div className='flex justify-between mt-[30px]'>
            <div>
                    <div className='font-bold text-[20px] mb-[10px] border-b-[2px] pb-[5px]'>🔎 Profile</div>
                    <ul>
                        <div className='font-bold mt-[15px]'>학력</div>
                        <li>덕성여자대학교 IT미디어공학전공 졸업 (2024. 8)</li>
                    </ul>
                    <ul>
                    <div className='font-bold mt-[10px]'>수상 및 자격</div>
                        <li><span className='mr-[15px]'>2023. 11</span>[카카오x구름] 2023 단풍톤 우수상</li>
                        <li><span className='mr-[15px]'>2020. 11</span>[덕성여자대학교] 과학기술대학 학술제 우수상</li>
                        <li><span className='mr-[15px]'>2021. 06</span>GTQ 인디자인 1급</li>
                        <li><span className='mr-[15px]'>2019. 07</span>사진기능사</li>
                        <li><span className='mr-[15px]'>2018. 05</span>GTQ 그래픽기술자격 1급</li>
                    </ul>
                </div>

                
                <div>
                    <div className='font-bold text-[20px] mb-[10px] border-b-[2px] pb-[5px]'>🔎 활동</div>
                    
                    <ul>
                        <li><span className='mr-[15px]'>22.03~24.07</span>더블유쇼핑 정보방송 알짜배기 여행백서 촬영 보조 인턴</li>
                        <li><span className='mr-[15px]'>23.10~24.07</span>해커톤 연합동아리 구름톤 UNIV 1/2기 프론트엔드 트랙 수료</li>
                        <li><span className='mr-[15px]'>23.05~23.11</span>프로젝트 기반 프론트엔드(React,Vue) 웹&앱 SW 개발자 양성과정 11기 수료</li>
                        <li><span className='mr-[15px]'>23.02~24.02</span>IT연합동아리 멋쟁이사자처럼 11기 프론트엔드 트랙 수료</li>
                        {/* <li><span className='mr-[15px]'>23.10~24.07</span>덕성여자대학교 덕성해커톤 1회 주관 및 진행</li> */}
                        <li><span className='mr-[15px]'>22.03~23.02</span>덕성여자대학교 커리어서포터즈 19/20기 디자인팀</li>
                        <li><span className='mr-[15px]'>22.03~23.02</span>IT연합동아리 멋쟁이사자처럼 10기 기획/디자인 트랙 수료</li>
                        <li><span className='mr-[15px]'>21.06~23.02</span>덕성여자대학교 IT미디어공학전공 제 17/18대 학생회장</li>
                        <li><span className='mr-[15px]'>20.03~20.11</span>덕성여자대학교 과학기술대학 단과대 학생회 자명</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutME