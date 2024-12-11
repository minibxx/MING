import React from 'react'
import yub1 from '../img/yubeen profile.png'
import yub2 from '../img/yubeen2.jpg'
import min from '../img/11.png'
import yu from '../img/12.png'
import been from '../img/13.png'

import AboutMeList from './portfolio/AboutMeList'
import AboutListW from './portfolio/AboutListW'
import Front from './Front'
import AboutMeText from './portfolio/AboutMeText'


function AboutME() {
    return (
        <>
            <div className='w-[80%]  flex mx-[auto] my-[70px]'>
                <div className='movingTextUp'><img src={min} /></div>
                <div className='movingTextDown'><img src={yu} /></div>
                <div className='movingTextUp'><img src={been} /></div>
            </div>

            <div className='w-[65%] m-[auto] '>
                <div className='flex justify-between mt-[90px] m-[auto]'>
                    <div className='w-[15%] '>
                        {/* <img src={yub2}/> */}
                        <img src={yub1} />
                    </div>
                    <ul className='w-[80%] flex flex-col gap-[3%]'>
                        <div className='font-bold text-[30px] mb-[10px] '>안녕하세요. 경험하며 성장하는 프론트엔드 개발자, 민유빈입니다.</div>
                        <li>저는 덕성여자대학교에서 IT미디어공학을 전공하며 <span className='bg-[#FFF8D9]'>웹 개발 및 UX 디자인</span>에 대한 깊은 흥미를 갖게 되었습니다.</li>
                        <li>동아리에서 참여한 다양한 프로젝트에서 기획 및 디자인 파트로 활동하며, 사용자 중심의 디자인을 구현하고 웹 개발에
                            접목시키는 역할을 수행하였습니다. <br />이를 통해 사용자 경험을 최적화하고 서비스의 성능을 향상시키는 디자인에
                            대해 배우고 생각해볼 수 있었습니다.</li>
                        <li>프론트엔드 양성과정을 수강하며 React, Html/Css, JavaScript, Next 등을 학습하고 사용한 경험이 있습니다. <br />저는 사용자와
                            <span className='font-semibold'> 인터랙션</span>이 가능하면서도 경쟁력 있는 기능을 가지고 있으며, 동시에 <span className='font-semibold'> 시각적으로 매력적인</span> 웹 서비스 개발을 희망합니다.</li>
                        <li>제가 가진 여러 경험과 능력을 더해 의미있는 프로젝트를 진행하며 함께 성장할 수 있으면 좋겠습니다. 감사합니다 (｡•̀ᴗ-)</li>
                        <div className='mt-[10px]'> ✉️ alsdbqls10@duksung.ac.kr 
                        <span className='ml-[20px]'>📱+82 10-9473-5716   </span> 
                        <span className='ml-[20px]'>💻 Github | minibxx   </span>
                        <span className='ml-[20px]'>   </span>
                        </div>
                    </ul>
                </div>

            </div>
            {/* <AboutMeText/>     */}
            <AboutListW/>
            {/* <div className='w-[80%] m-[auto]'> */}
            {/* <AboutMeList /> */}
            {/* </div> */}
            <div className='w-[80%] m-[auto] font-bold text-[90px] mb-[10px] mb-[20px] h-[120px] items-center text-[gray]'>
                PROJECTS<span className='text-[15px] text-[black] ml-[30px]'>아래 프로젝트 위에 마우스를 올려보세요</span>
            </div>
            <Front/>
        </>
    )
}

export default AboutME