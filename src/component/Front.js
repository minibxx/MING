import React, { useEffect, useState } from 'react'
import '../css/front.scss';
import face1 from '../img/left2.png'
import face2 from '../img/left-top.png'
import face3 from '../img/left.png'
import face4 from '../img/right.png'
import face5 from '../img/top.png'
import face6 from '../img/rightb.png'

function Front() {
  const [hoveredProject, setHoveredProject] = useState(0);

  const onMouseEnterOnProject = (key) => {
    setHoveredProject(key);
  };

  const renderPofolTitle = () => {
    if (hoveredProject === 1) {
      return 'ddokddok';
    } else if (hoveredProject === 2) {
      return 'FlouD';
    } else if (hoveredProject === 3) {
      return 'SSock';
    } else if (hoveredProject === 4) {
      return ' Wealth';
    } else if (hoveredProject === 5) {
      return ' SlowL';
    } else {
      return '별별연인';
    }

  }
  const renderPofolFace = () => {
    if (hoveredProject === 1) {
      return face2;
    } else if (hoveredProject === 2) {
      return face1;
    } else if (hoveredProject === 3) {
      return face3;
    } else if (hoveredProject === 4) {
      return face5;
    } else if (hoveredProject === 5) {
      return face4;
    } else {
      return face6;
    }

  }

  const renderPofolStyle = () => {
    if (hoveredProject === 1) {
      return 'pofol-title';
    } else if (hoveredProject === 2) {
      return 'pofol-title2';
    } else if (hoveredProject === 3) {
      return 'pofol-title';
    } else if (hoveredProject === 4) {
      return 'pofol-title2';
    } else if (hoveredProject === 5) {
      return 'pofol-title';
    } else {
      return 'pofol-title2';
    }

  }

  useEffect(() => {
    console.log(hoveredProject);
  }, [hoveredProject])

  return (
    <>
      <div className='front row'>
        <div className='pofols'>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(1)} href=''>
            [DDokDDok] <br /> 똑부러지는 취업, <br/>똑바른 자세부터! 똑똑
          </a>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(2)} href=''>
          [FlouD] <br />하루 10분 회고하며 <br />매일 1% 성장하다
            
          </a>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(3)} href=''>
         [SSOCK] <br />음성인식 모바일 키오스크 <br />내 폰 안에, 쏙!
          </a>
        </div>
        <div className='pofol-div'>
          <b className={renderPofolStyle()}>{renderPofolTitle()}</b>
          <img className='renderPofolStyle ml-[50px]' src={renderPofolFace()} />
        </div>
        <div className='pofols right'>

          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(4)} href=''>
          [Wealth] <br />여성에 의한, 여성을 위한 <br />인공지능 기반 <br />헬스 보조 서비스
          </a>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(5)} href=''>
          [SlowL] <br />경계성 지능 장애인을 위한 <br /> 느린 교육 플랫폼, 슬로울
          </a>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(6)} href=''>
          [별별연인] <br />사주 기반 <br /> 연인 매칭 서비스
          </a>
        </div>
      </div>
    </>
  )
}

export default Front