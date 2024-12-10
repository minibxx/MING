import React from 'react'

function AboutMeText() {
    return (
        <div className='w-[80%] m-[auto] '>
            <div className='flex flex-col mt-[70px]'>
                <div>
                    <div className='font-bold text-[40px] mb-[10px] border-b-[2px] pb-[5px]'>🔎 Profile</div>
                </div>
                <div>

                    <div className='flex flex-start'>
                        <ul className='w-[40%]'>
                            <div className='font-bold mt-[15px]'>학력</div>
                            <li><span className='mr-[13px]'>2024. 08</span>덕성여자대학교 IT미디어공학전공 졸업 (4.03 / 4.5)</li>
                            <ul>
                                <div className='font-bold mt-[10px]'>수상</div>
                                <li><span className='mr-[15px]'>2023. 11</span>[카카오x구름] 2023 단풍톤 우수상</li>
                                <li><span className='mr-[15px]'>2023. 11</span>[덕성여자대학교] 2023 진로탐색학점제 은상</li>
                                <li><span className='mr-[15px]'>2022. 11</span>[덕성여자대학교] 컴퓨팅사고 융합경진대회 장려상</li>
                                <li><span className='mr-[15px]'>2020. 11</span>[덕성여자대학교] 과학기술대학 학술제 우수상</li>
                            </ul>
                            <ul>
                                <div className='font-bold mt-[10px]'>자격</div>
                                <li><span className='mr-[15px]'>2021. 06</span>GTQ 인디자인 1급</li>
                                <li><span className='mr-[15px]'>2019. 07</span>사진기능사</li>
                                <li><span className='mr-[15px]'>2018. 05</span>GTQ 그래픽기술자격 1급</li>
                            </ul>
                        </ul>
                        <ul>
                            <div className='font-bold mt-[15px]'>활동</div>
                            <li className='flex'><div className='mr-[15px] w-[95px]'>22.03~24.07</div><div>더블유쇼핑 정보방송 알짜배기 여행백서 촬영 보조 인턴</div></li>
                            <li className='flex'><div className='mr-[15px] w-[95px]'>22.03~23.02</div><div>덕성여자대학교 커리어서포터즈 19/20기 디자인 팀장</div></li>

                            <li className='flex'><div className='mr-[15px] w-[95px]'>21.06~23.02</div><div>덕성여자대학교 IT미디어공학전공 제 17/18대 학회장</div></li>
                            <li className='flex'><div className='mr-[15px] w-[95px]'>20.03~20.11</div><div>덕성여자대학교 과학기술대학 학생회 자명 홍보국장</div></li>
                            <div className='font-bold mt-[15px]'>교육</div>
                            <li className='flex'><div className='mr-[15px] w-[95px]'>23.10~24.07</div><div>해커톤 연합동아리 구름톤 UNIV 1/2기 프론트엔드 트랙 수료</div></li>
                            <li className='flex'><div className='mr-[15px] w-[95px]'>23.05~23.11</div><div>프로젝트 기반 프론트엔드(React,Vue) <br />웹&앱 SW 개발자 양성과정 11기 수료</div></li>
                            <li className='flex'><div className='mr-[15px] w-[95px]'>23.02~24.02</div><div>IT연합동아리 멋쟁이사자처럼 11기 프론트엔드 트랙 수료</div></li>
                            <li className='flex'><div className='mr-[15px] w-[95px]'>22.03~23.02</div><div>IT연합동아리 멋쟁이사자처럼 10기 기획/디자인 트랙 수료</div></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-[70px]'>
                <div className='font-bold text-[40px] mb-[10px] border-b-[2px] pb-[5px]'>⚒️  Skills  [ 상 · 중 · 하 ]</div>
                <div className='flex flex-start'>
                    <ul className='w-[45%]'>
                        <div className='font-bold mt-[15px]'>FRONTEND</div>
                        <ul>‣ Html / Css & Javascript</ul>
                        <li>‣ React</li>
                        <li>‣ Next & Typescript </li>
                        <li>‣ Android</li>
                        <li>‣ Vue</li>
                        <li>‣ Zustand / Recoil / Three.js </li>
                    </ul>
                    <ul className='mb-[30px]'>
                        <div className='font-bold mt-[15px]'>DESIGN</div>
                        <li>‣ Photoshop</li>
                        <li>‣ Blender / Maya</li>
                        <li>‣ Illustrator</li>
                        <div className='font-bold mt-[15px]'>FRONTEND</div>
                        <li>‣ Github</li>
                        <li>‣ Notion</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default AboutMeText