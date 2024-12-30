
import React from 'react'
import ssock from '../../img/slowll.png'
import styled from "styled-components";
import floudB from '../../img/bbogle_logo.png'
import github from '../../img/github.png'

const Flex = styled.div`
  display: flex;
	justify-content: space-between;
`;

const Img = styled.div`
  width: 37%;
  margin: 30px 0px;
`;

const ContentBox = styled.div`
	border-radius: 20px;
	box-shadow: 0 0 10px #D3D3D3;
	padding: 30px 110px ;
	background-image: linear-gradient(#EFF9E8, #fff);
    margin-bottom: 70px;
`;
function SlowL() {
    return (
        <>
        <ContentBox>
        <div className='flex gap-[50px] py-[30px]'>
            <div>
                <div className='text-[gray]'>Project</div>
                <div className='mb-[10px]'>UIUX | Frontend</div>
            </div>
            <div>
                <div className='text-[gray]'>Period</div>
            <div className='mb-[10px]'>2024. 11 ~ 개발 중</div>
            </div>
            <div>
                <div className='text-[gray]'>기여도</div>
                <div className='mb-[10px]'>Plan 70 | Design 100 | FrontEnd 50</div>
            </div>
            <div>
                <div className='text-[gray]'>Used</div>
                <div className='mb-[10px]'>HTML, CSS</div>
            </div>
            <div>
                <div className='flex gap-[10px]'>
                    <div className='w-[45px] flex'>
                        <img src={github} />
                    </div>
                    <div className='w-[50px]'>
                        <img src={floudB} />
                    </div>
                </div>
            </div>
        </div>
        <Flex>
            <div className='w-[55%]'>
            <div className='text-[#3F8424] font-bold text-[25px] mb-[20px]'>경계성 지능인을 위한 느린 교육 플랫폼, SlowL</div>

            <div className='mt-[15px]'>슬로울에서는 인공지능과의 채팅을 통해 행동 방향성을 제시하고, 퀴즈게임을 통해 생활상식을 교육합니다. 사용자가 답변한 자료를 통계화하여 장애 행동 개선 및 연구자료로 활용하고 사고를 예방합니다. </div>
                <div className='mb-[10px]'></div>
                <div className='font-bold mt-[15px] mb-[5px]'>트러블 슈팅</div>
                <div>▪️ 무한 스크롤 구현</div>
                <div>▪️ 즐겨찾기 페이지 반복 스타일링</div>
                <div>→ :nth-child 선택자와 함께 주기(an + b)를 활용한 스타일 패턴 지정</div>
                {/* <div>Ⅰ. 페이지 계층 구조에 따른 전역 상태 관리</div>
                <div className='ml-[12px]'>사용자가 작성한 KPT 회고 내용을 여러 페이지에서 공유하는 기획에 따라 페이지의 깊이가 깊어짐</div>
                <div className='ml-[12px]'>→  상태 관리 라이브러리 Recoil을 사용하여 상태 의존성을 관리하며 성능을 최적화</div>
                <div className='mt-[10px]'>Ⅱ. 페이지 이동 시 매끄러운 화면 트랜지션</div>
                <div className='ml-[12px]'>setInterval을 일일이 만들기에는 복잡함 → Request Animation Frame을 이용해 수행하고자 하는 <br/> 애니메이션을 브라우저에게 전달하고, 리페인트 전에 해당 애니메이션을 업데이트하는 함수를 호출</div> */}
                
                <div className='font-bold mt-[15px] mb-[5px]'>러닝 포인트</div>
                <div>▪️ 깃허브 이슈 관리</div>
                <div>▪️ 공통 컴포넌트 작업</div>
                <div>▪️ 쥬스탠드를 이용한 전역 상태 관리</div>
                
            </div>
            <Img>
                <img src={ssock} />
            </Img>
        </Flex>
    </ContentBox>
    </>

    )
}

export default SlowL
