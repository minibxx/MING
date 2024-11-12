import React from 'react'
import thumb3 from '../img/byeolbyeol_logo.png'

function Byeol() {
    return (
        <div className='item_ul'>
            <img src={thumb3} />
            <ul className='item_li'>
                <li>
                    <p>별별연인</p>
                    <p>사주기반 연인찾기 서비스</p>
                    <p>나는 사람들의 인연을 맺어주러 내려온 외계인</p>
                </li>
                <li>
                    <p>기획의도</p>
                    <p>이성을 만나고 싶은데 만날 수 있는 통로가 없는 사람들을 위해!</p>
                    <p>우린 모두 다 동등한 인류 <br />태어난 년,월,일,시만 알면 나도 누군가에겐 천생연분! </p>
                </li>
                <li>
                    <p>개발 환경</p>
                    <p>Html,Css/Scss,Javascript</p>
                </li>
                <li><button>View</button></li>
            </ul>
        </div>
    )
}

export default Byeol