import React from 'react'
import c1 from '../../img/c1.png'
import c2 from '../../img/c2.png'
import c3 from '../../img/c3.png'
import '../../css/about.scss'

function AboutMeList() {
  return (
    <>
      <div className='flex justify-between'>

        <div className='bg-[#D8DAF1] pl-[40px] relative w-[33vw]'>
          <div className='w-[150px] m-[auto] mt-[50px] absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]'> <img src={c2} /></div>
          <div className='font-bold text-[90px] mb-[10px] m-[auto] text-center mt-[10px] mb-[20px] h-[260px] items-center pt-[70px] text-[gray]'>PROFILE</div>
          <ul>
            <div className='font-bold mt-[15px]'>학력</div>
            <li><span className='mr-[15px]'>2024. 08</span>덕성여자대학교 IT미디어공학전공 졸업 (4.03 / 4.5)</li>
          </ul>
          <ul>
            <div className='font-bold mt-[10px]'>수상</div>
            <li><span className='mr-[15px]'>2023. 11</span>[카카오x구름] 2023 단풍톤 우수상</li>
            <li><span className='mr-[15px]'>2023. 11</span>[덕성여자대학교] 2023 진로탐색학점제 은상</li>
            <li><span className='mr-[15px]'>2023. 11</span>[덕성여자대학교] 2022 컴퓨팅사고 융합경진대회 장려상</li>
            <li><span className='mr-[15px]'>2020. 11</span>[덕성여자대학교] 과학기술대학 학술제 우수상</li>
          </ul>
          <ul>
            <div className='font-bold mt-[10px]'>자격</div>
            <li><span className='mr-[15px]'>2021. 06</span>GTQ 인디자인 1급</li>
            <li><span className='mr-[15px]'>2019. 07</span>사진기능사</li>
            <li><span className='mr-[15px]'>2018. 05</span>GTQ 그래픽기술자격 1급</li>
          </ul>
        </div>

          <div className='bg-[#ECDEEE] pl-[40px] relative w-[33vw]'>
          <div className='w-[150px] m-[auto] mt-[50px] absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]'> <img src={c1} /></div>
          <div className='font-bold text-[90px] mb-[10px] m-[auto] text-center mt-[10px] mb-[20px] h-[260px] items-center pt-[70px] text-[gray]'>ACTIVITIES</div>
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
            <li className='flex'><div className='mr-[15px] w-[95px]'>22.03~23.02</div><div>IT연합동아리 멋쟁이사자처럼 10기 기획/디자인 트랙 수료</div></li>

          </ul>
        </div>

        <div className='bg-[#D8DAF1] pl-[40px] relative w-[33vw] '>
        <div className='w-[150px] m-[auto] mt-[50px] absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]'> <img src={c3} /></div>
          <div className='font-bold text-[90px] mb-[10px] m-[auto] text-center mt-[10px] mb-[20px] h-[260px] items-center pt-[70px] text-[gray]'>SKILLS</div>
          <ul className=''>
            <div className='font-bold '>‣ Html / Css & Javascript</div>
            <ul></ul>
            <li>시멘틱 태그와 자바스크립트(ES6+) 기능 및 문법 능숙하게 사용 가능</li>
            <li>CSS3, Flexbox를 사용한 반응형 웹 디자인</li>
            <li>비동기 프로그래밍(Promises, async/await) 경험, DOM 조작 및 이벤트 처리</li>
            <div className='font-bold mt-[15px]'>‣ React</div>
            <li>컴포넌트 기반 아키텍쳐 설계, Styled-components, tailwind 활용</li>
            <li>Hooks를 사용한 로컬 상태 관리, React Router를 사용한 라우팅</li>
            <li>Zustand, Recoil을 이용한 전역 상태 관리</li>
            <div className='font-bold mt-[15px]'>‣ Next & Typescript</div>
            <li>서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 활용한 SEO 최적화 및 성능 향상</li>
            <li>동적 라우팅과 API Routes를 사용하여 서버리스 백엔드 구현</li>
            <li>React 컴포넌트 Prop 타입 지정을 통해 명확한 인터페이스 제공</li>
            <div className='font-bold mt-[15px]'>‣ ETC</div>
            <li className='mb-[50px]'>  Flutter / Vue / Photoshop / Illustrator / Blender / Maya / Github / Notion</li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default AboutMeList