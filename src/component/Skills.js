import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


function Skills() {
  return (
    <>
      <Canvas id='canvas' height="500">
        <OrbitControls autoRotate={true} />
        <mesh>
          <ambientLight intensity={2} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xf08080} />
        </mesh>
      </Canvas>
      <div>
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
      </div>
    </>
  )
}

export default Skills