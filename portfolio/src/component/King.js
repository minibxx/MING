import React from 'react'
import thumb2 from '../img/kingsejong_logo.png'


function King() {
    return (
        <>
            <div className='item_ul'>
                <img src={thumb2}/>
                <ul className='item_li'>
                    <li>
                        <p>오늘의 세종대왕</p>
                        <p>단어를 맞춰라!</p>
                    </li>
                    <li>
                        <p>기획의도</p>
                        <p>나는 한국인! 내 어휘력은 어느정도일까?</p>
                        <p>책을 읽지 않으면  <br />웬만하면 맞출 수 없는 단어들의 향연 </p>
                    </li>
                    <li>
                        <p>개발 환경</p>
                        <p>Html,Css/Scss,React,Node.js</p>
                    </li>
                    <li><button>View</button></li>
                </ul>
            </div>
        </>
    )
}

export default King