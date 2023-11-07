import React, { useEffect, useState } from 'react'

import Toeat from './Toeat';
import King from './King';
import Byeol from './Byeol';

function Contact() {
  const [hoveredProject, setHoveredProject] = useState(0);

  const onMouseEnterOnProject = (key) => {
    setHoveredProject(key);
  };

  const onMouseOutOnProject = () => {
    setHoveredProject(0);
  }

  const renderPofolStyle = () => {
    if (hoveredProject === 1) {
      return <Toeat />;
    } else if (hoveredProject === 2) {
      return <King />
    } else if (hoveredProject === 3) {
      return <Byeol />
    } else {
      return <></>;
    }

  }

  return (
    <section className='projectdisplay'>
      <ul className='work_simple'>
        <li className='work_li'>Work</li>
        <li>
          <span className='number'>1</span>
          <p>TODAY EAT</p>
          <p>오늘 뭐먹지?</p>
          <p>서울 맛집& 데이트 코스 추천</p>
        </li>
        <li>
          <span className='number'>2</span>
          <p>오늘의 세종대왕</p>
          <p>단어를 맞춰라!</p>
          <p>한국어 어휘력을 테스트하고 싶으십니까?</p>
        </li>
        <li>
          <span className='number'>3</span>
          <p>별별연인</p>
          <p>사주기반 연인찾기 서비스!</p>
          <p>하늘이 예비한 인연! 당신과 맞는 사람은 누굴까?</p>
        </li>
      </ul>
      
      <article className='projectdisplay_item_flex' 
      onMouseOut={onMouseOutOnProject}
      >
      {hoveredProject == 0 ? (
        <>
        <div className='item'>
          <figure className='thumbnail' onMouseEnter={() => onMouseEnterOnProject(1)} >
            <img src='./toeat_logo.png' />
          </figure>
          <div>
            <figure>
              <img src='' />
            </figure>
          </div>
        </div>

        <div className='item'>
          <figure className='thumbnail' onMouseEnter={() => onMouseEnterOnProject(2)}>
            <img src='./kingsejong_logo.png' />
          </figure>
          <div>
            
            <figure>
              <img src='' />
            </figure>
          </div>
        </div>
        <div className='item'>
          <figure className='thumbnail' onMouseEnter={() => onMouseEnterOnProject(3)}>
            <img src='./byeolbyeol_logo.png' />
          </figure>
          <div>
            
            <figure>
              <img src='' />
            </figure>
          </div>
        </div>
        </>)
      :
      renderPofolStyle()
      }
      </article>
      
    </section>

  )
}

export default Contact