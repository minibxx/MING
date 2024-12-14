import React, { useEffect, useState } from 'react'
import '../css/front.scss';
import face1 from '../img/left2.png'
import face2 from '../img/left-top.png'
import face3 from '../img/left.png'
import face4 from '../img/right.png'
import face5 from '../img/top.png'
import face6 from '../img/rightb.png'
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'
import p4 from '../img/p4.png'
import p5 from '../img/p5.png'
import p6 from '../img/p6.png'
import Ssock from './portfolio/Ssock'
import Ddokddok from './portfolio/Ddokddok';
import Floud from './portfolio/Floud';
import Plan from './portfolio/Plan';
import SlowL from './portfolio/SlowL';
import Byeol from './portfolio/Byeol';


function Front() {
  const [hoveredProject, setHoveredProject] = useState(0);

  const onMouseEnterOnProject = (key) => {
    setHoveredProject(key);
  };

  const renderPofolTitle = () => {
    // if (hoveredProject === 1) {
    //   return p1;
    // } else if (hoveredProject === 2) {
    //   return p2;
    // } else if (hoveredProject === 3) {
    //   return p3;
    // } else if (hoveredProject === 4) {
    //   return p4;
    // } else if (hoveredProject === 5) {
    //   return p5;
    // } else {
    //   return p6;
    // }
    if (hoveredProject === 1) {
      return '똑ㅤㅤ똑';
    } else if (hoveredProject === 2) {
      return 'SSOCK';
    } else if (hoveredProject === 3) {
      return '플랜데스';
    } else if (hoveredProject === 4) {
      return 'FLOUD';
    } else if (hoveredProject === 5) {
      return 'ㅤSLOWL';
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

  // const renderPofolFace2 = () => {
  //   if (hoveredProject === 1) {
  //     return <img className='renderPofolStyle ml-[50px] fadeIn' src={face2} />;
  //   } else if (hoveredProject === 2) {
  //     return <img className='renderPofolStyle ml-[50px] fadeIn' src={face1} />;
  //   } else if (hoveredProject === 3) {
  //     return <img className='renderPofolStyle ml-[50px] fadeIn' src={face3} />;
  //   } else if (hoveredProject === 4) {
  //     return <img className='renderPofolStyle ml-[50px] fadeIn' src={face5} />;
  //   } else if (hoveredProject === 5) {
  //     return <img className='renderPofolStyle ml-[50px] fadeIn' src={face4} />;
  //   } else {
  //     return <img className='renderPofolStyle ml-[50px] fadeIn' src={face6} />;
  //   }
  // }

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

  const renderPofolCard = () => {
    if (hoveredProject === 1) {
      return <Ddokddok />;
    } else if (hoveredProject === 2) {
      return <Ssock />;
    } else if (hoveredProject === 3) {
      return <Plan />;
    } else if (hoveredProject === 4) {
      return <Floud />;
    } else if (hoveredProject === 5) {
      return <SlowL />;
    } else {
      return <Byeol />;
    }

  }

  useEffect(() => {
    console.log(hoveredProject);
  }, [hoveredProject])

  return (
    <>

      <div className='w-[85%] m-[auto] font-bold text-[90px] mb-[10px] mb-[20px] h-[120px] items-center text-[gray]'>
        PROJECTS<span className='text-[15px] text-[black] ml-[30px]'>아래 프로젝트 위에 마우스를 올려보세요</span>
      </div>
      <div className='w-[85%] m-[auto] relative'>
        <div className='front row'>
          <div className='pofols'>
            <a className='pofol font1' onMouseEnter={() => onMouseEnterOnProject(1)} href=''>
              <span className='font-black text-[30px]'> DDokDDok</span><br /> 똑부러지는 취업, <br />똑바른 자세부터! 똑똑
            </a>
            <a className='pofol font2' onMouseEnter={() => onMouseEnterOnProject(2)} href=''>
              <span className='font-black text-[30px]'> SSock</span> <br />음성인식 모바일 키오스크 <br />내 폰 안에, 쏙!


            </a>
            <a className='pofol font3' onMouseEnter={() => onMouseEnterOnProject(3)} href=''>
              <span className='font-black text-[30px]'> PlanDeath</span> <br />당신이 내일 죽는다면? <br />죽음을 기획하라, 플랜데스
            </a>
          </div>
          <div className='pofol-div'>
            <b className={renderPofolStyle()}>{renderPofolTitle()}</b>
            {/* <img className='pofol-title' src={renderPofolTitle()} /> */}
            <img className={`ml-[50px] fadeIn`} src={renderPofolFace()} />
            {/* {renderPofolFace2()} */}
          </div>
          <div className='pofols right'>

            <a className='pofol font4' onMouseEnter={() => onMouseEnterOnProject(4)} href=''>
              <span className='font-black text-[30px]'> FlouD</span> <br />하루 10분 회고하며 <br />매일 1% 성장하다

            </a>
            <a className='pofol font5' onMouseEnter={() => onMouseEnterOnProject(5)} href=''>
              <span className='font-black text-[30px]'> SlowL</span> <br />경계성 지능 장애인을 위한 <br /> 느린 교육 플랫폼, 슬로울
            </a>
            <a className='pofol font6' onMouseEnter={() => onMouseEnterOnProject(6)} href=''>
              <span className='font-black text-[30px]'> 별별연인</span> <br />사주 기반 <br /> 연인 매칭 서비스
            </a>
          </div>
        </div>
        <div className='fadeIn'>{renderPofolCard()}</div>
      </div>
    </>
  )
}

export default Front
