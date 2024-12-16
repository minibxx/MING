import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import skill1 from '../img/skill1.png'
import skill2 from '../img/skill2.png'
import skill3 from '../img/skill3.png'
import skill4 from '../img/skillHtmlB.png'
import skill5 from '../img/skillCssB 2.jpg'
import skill6 from '../img/skillReactB.png'
import skill7 from '../img/skillVueB.png'
import skill8 from '../img/skillJsBB.png'
import skill9 from '../img/skillTsB.png'
import skill10 from '../img/skillThreeB.png'
import skill from '../img/4.png'





function Skills() {
  return (
    <>
    {/* <img className='w-[30%] m-[auto]' src={skill} /> */}
      {/* <Canvas id='canvas' height="500">
        <OrbitControls autoRotate={true} />
        <mesh>
          <ambientLight intensity={2} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xf08080} />
        </mesh>
      </Canvas> */}
      
      <div className='flex m-[auto] justify-evenly mt-[50px]'>
        {/* <img className='h-[10vh]' src={skill2} /> */}
        {/* <img className='h-[10vh]' src={skill3} /> */}
        <img className='h-[10vh]' src={skill4} />
        <img className='h-[10vh]' src={skill5} />
        <img className='h-[10vh]' src={skill6} />
        <img className='h-[10vh]' src={skill1} />
        <img className='h-[10vh]' src={skill8} />
        <img className='h-[10vh]' src={skill9} />
        <img className='h-[10vh]' src={skill10} />
        <img className='h-[10vh]' src={skill7} />
      </div>
      {/* <div>
        <p>HTML</p>
        <p>CSS</p>
        <p>React</p>
        <p>Next</p>
        <p>Vue</p>
        <p>JavaScript</p>
        <p>TypeScript</p>
        <p>Flutter</p>
        <p></p>
      </div> */}
      <div>
      <div className='flex justify-between my-[50px]'>
        <div className='bg-[#D8DAF1] relative w-[33vw] py-[50px]'>
          <div className='font-bold text-[80px] mb-[10px] text-center  mb-[20px] h-[120px] text-[gray]'>Html / Css</div>
          <div className='pl-[40px]'>
        <li>시멘틱 태그와 CSS3를 활용하여 표준 웹 디자인 제작 가능</li>
        <li>Flexbox를 사용한 반응형 웹 디자인 경험 보유</li>
        <li>비동기 프로그래밍을 통한 데이터 처리 및 DOM 조작 가능</li>
        <li> 이벤트 처리와 효율적인 DOM 조작 경험</li>
        <li> HTML5 시멘틱 요소를 이해하고 활용하여 접근성과 유지보수성을 개선 </li>
        </div>
        </div>

          <div className='bg-[#ECDEEE] relative w-[33vw] py-[50px]'>
          <div className='font-bold text-[80px] mb-[10px] text-center  mb-[20px] h-[120px] text-[gray]'>React / Next</div>
          <div className='pl-[40px]'>
        <div className='font-bold mt-[15px]'>‣ React</div>
        <li>컴포넌트 기반 아키텍처 설계로 재사용성과 유지보수성이 높은 UI 구현</li>
        <li>React Hooks를 사용한 로컬 상태 관리 및 이벤트 처리</li>
        <li>React Router를 이용한 클라이언트 사이드 라우팅</li>

        <div className='font-bold mt-[15px]'>‣ Next </div>
        <li>서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 </li>
        <li>활용한 SEO 최적화 및 성능 향상</li>
        <li>API Routes를 사용하여 백엔드 구현</li>
        <li>Styled-components와 Tailwind CSS를 활용한 효율적인 스타일링</li>
        <li className='mb-[20px]'>Zustand와 Recoil을 사용한 전역 상태 관리 구현</li>
        </div>
        </div>

        <div className='bg-[#D8DAF1] relative w-[33vw] py-[50px] '>
          <div className='font-bold text-[80px] mb-[10px] text-center mb-[20px] h-[120px] text-[gray]'> JS / TS</div>
          <div className='pl-[40px]'>
          <div className='font-bold mt-[15px]'>‣ Javascript / Typescript</div>
        <li>Prop 타입 지정과 타입스크립트를 활용하여 명확하고 안전한 인터페이스 설계</li>
        <li>비동기 요청 및 API 통신을 처리하는 Axios 활용</li>
        <li>모듈화 및 재사용 가능한 코드 설계 능력 보유</li>
        <div className='font-bold mt-[15px]'>‣ ETC</div>
        <li className=''>  Flutter / Vue / three.js</li>
            <li className=''>  Photoshop / Illustrator / Blender / Maya </li>
            <li className=''>  Github / Notion</li>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Skills