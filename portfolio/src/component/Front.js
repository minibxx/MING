import React, { useEffect, useState } from 'react'
import '../css/front.scss';
import face1 from '../img/fm_ts2.png'
import face2 from '../img/left-top.png'
import face3 from '../img/left.png'
import face4 from '../img/right.png'
import face5 from '../img/top.png'
import face6 from '../img/right2.png'

function Front() {
  const [hoveredProject, setHoveredProject] = useState(0);

  const onMouseEnterOnProject = (key) => {
    setHoveredProject(key);
  };

  const renderPofolTitle = () => {
    if (hoveredProject === 1) {
      return 'SSOCK';
    } else if (hoveredProject === 2) {
      return 'Wealth';
    } else if (hoveredProject === 3) {
      return 'KEYGEL';
    } else if (hoveredProject === 4) {
      return ' ToEAT';
    } else if (hoveredProject === 5) {
      return ' 별별연인';
    } else {
      return 'UR-CLE';
    }

  }
  const renderPofolFace = () => {
    if (hoveredProject === 1) {
      return face1;
    } else if (hoveredProject === 2) {
      return face2;
    } else if (hoveredProject === 3) {
      return face3;
    } else if (hoveredProject === 4) {
      return face5;
    } else if (hoveredProject === 5) {
      return face6;
    } else {
      return face4;
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
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(1)} href='https://github.com/gardening-y/Helpkiosk'>
            [SSOCK] <br /> 음성 인식을 이용한 <br />모바일 키오스크, 쏙
          </a>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(2)} href=''>
            [Wealth] <br />여성에 의한, 여성을 위한 <br />인공지능 기반 <br />헬스 보조 서비스
          </a>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(3)} href=''>
            [KEYGEL] <br />(주) 키젤글로벌 <br /> 공식 사이트 KEYGEL
          </a>
        </div>
        <div className='pofol-div'>
          <b className={renderPofolStyle()}>{renderPofolTitle()}</b>
          <img className='renderPofolStyle' src={renderPofolFace()} />
        </div>
        <div className='pofols right'>

          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(4)} href=''>
            [ToEAT]<br /> 오늘 뭐먹지? 서울 맛집 <br />소개 서비스, 투잇
          </a>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(5)} href=''>
            [별별연인] <br />사주 기반 <br /> 연인 매칭 서비스
          </a>
          <a className='pofol' onMouseEnter={() => onMouseEnterOnProject(6)} href=''>
            [UR-CLE] <br />하루 10분 회고하며 <br />매일 1% 성장하다
          </a>
        </div>
      </div>
    </>
  )
}

export default Front