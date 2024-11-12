import React from 'react'
import thumb1 from '../img/toeat_logo.png'

function Toeat() {
    return (
        <>
            <div className='item_ul'>
                <img src={thumb1} />
                <ul className='item_li'>

                <li>
                    <p>Today Eat!</p>
                    <p>오늘 뭐먹지?</p>
                </li>
                <li>
                    <p>기획의도</p>
                    <p>서울을 알고 싶다고? Toeat으로 오세요</p>
                    <p>서울이 익숙하지 않은 사람들도 <br />쉽게 찾는 맛집과 데이트 추천코스! </p>
                </li>
                <li>
                    <p>개발 환경</p>
                    <p>Html,Css/Scss,Javascript</p>
                </li>
                <li><button>View</button></li>
                </ul>
            </div>
        </>
    )
}

export default Toeat