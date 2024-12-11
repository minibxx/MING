import React from 'react'

function AboutListW() {
  return (
    <>
      <div className='w-[80%] m-[auto] flex justify-between my-[50px]'>
        <div className='relative w-[28vw] py-[30px]'>
          {/* <div className='w-[150px] m-[auto] mt-[50px] absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]'> <img src={c2} /></div> */}
          <div className='font-bold text-[90px] mb-[10px] m-[auto] mb-[20px] h-[120px] items-center text-[gray]'>PROFILE</div>
          <ul>
            <div className='font-bold mt-[15px]'>학력</div>
            <li>덕성여자대학교 IT미디어공학전공 졸업 (4.03 / 4.5)</li>
          </ul>
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
        </div>

        <div className='pl-[40px] relative w-[38vw] py-[30px]'>
          {/* <div className='w-[150px] m-[auto] mt-[50px] absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]'> <img src={c1} /></div> */}
          <div className='font-bold text-[90px] mb-[10px] m-[auto]] mb-[20px] h-[120px] items-center  text-[gray]'></div>
          <ul className=''>
            <div className='font-bold mt-[15px]'>활동</div>
            <li className='flex'><div className='mr-[15px] w-[95px]'>22.03~24.07</div><div>더블유쇼핑 정보방송 알짜배기 여행백서 촬영 보조 인턴</div></li>
            <li className='flex'><div className='mr-[15px] w-[95px]'>22.03~23.02</div><div>덕성여자대학교 커리어서포터즈 19/20기 디자인 팀장</div></li>

            <li className='flex'><div className='mr-[15px] w-[95px]'>21.06~23.02</div><div>덕성여자대학교 IT미디어공학전공 제 17/18대 학회장</div></li>
            <li className='flex'><div className='mr-[15px] w-[95px]'>20.03~20.11</div><div>덕성여자대학교 과학기술대학 학생회 자명 홍보국장</div></li>
            <div className='font-bold mt-[15px]'>교육</div>
            <li className='flex'><div className='mr-[15px] w-[95px]'>23.10~24.07</div><div>해커톤 연합동아리 구름톤 UNIV 1/2기 프론트엔드 트랙 수료</div></li>
            <li className='flex'><div className='mr-[15px] w-[95px]'>23.05~23.11</div><div>프로젝트 기반 프론트엔드(React,Vue) <br />웹&앱 SW 개발자 양성과정 11기 수료</div></li>
            <li className='flex'><div className='mr-[15px] w-[95px]'>23.02~24.02</div><div>IT연합동아리 멋쟁이사자처럼 11기 프론트엔드 트랙 수료</div></li>
            <li className='flex '><div className='mr-[15px] w-[95px]'>22.03~23.02</div><div>IT연합동아리 멋쟁이사자처럼 10기 기획/디자인 트랙 수료</div></li>
          </ul>
        </div>

        <div className=' pl-[40px] relative w-[33vw] py-[30px] '>
          {/* <div className='w-[150px] m-[auto] mt-[50px] absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]'> <img src={c3} /></div> */}
          <div className='font-bold text-[90px] mb-[10px] m-[auto] mb-[20px] h-[120px] items-center text-[gray]'>SKILLS</div>
          <ul className=''>
            <div className='font-bold '>‣ Html / Css & Javascript</div>
            <ul></ul>
            <div className='font-bold mt-[15px]'>‣ React</div>
            <div className='font-bold mt-[15px]'>‣ Next & Typescript</div>
            <div className='font-bold mt-[15px]'>‣ ETC</div>
            <li className=''>  Flutter / Vue / Photoshop / Illustrator / Blender / Maya / Github / Notion</li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default AboutListW