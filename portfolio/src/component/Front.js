import React from 'react'
import face1 from '../img/fm_ts2.jpg'
import face2 from '../img/left-top.png'
import face3 from '../img/left.png'
import face4 from '../img/right.png'
import face5 from '../img/top.png'

function Front() {
  return (
    <>
        <div className='front'>
            <a href='https://github.com/gardening-y/Helpkiosk'>[SSOCK] 음성 인식을 이용한 모바일 키오스크, 쏙</a>
            <div>[Wealth] 여성에 의한, 여성을 위한 인공지능 기반 헬스 보조 서비스</div>
            <div>[KEYGEL] 젤 브랜드 ‘KEYGEL global’ 사이트</div>
            <div>[ToEAT] 서울 맛집 소개 서비스</div>
            <div>[Your Cloud] 하루 10분 회고하며 매일 1% 성장하다</div>
            <div className='pofol-div'>
                <div>SSOCK</div>
            </div>
            <img className='face' src={face3}/>
            <img className='face' src={face2}/>
            <img className='face' src={face1}/>
            <img className='face' src={face5}/>
            <img className='face' src={face4}/>
        </div>
    </>
  )
}

export default Front