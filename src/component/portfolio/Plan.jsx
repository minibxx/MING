import React from 'react'
import ssock from '../../img/plandeath3.png'
import styled from "styled-components";
import ssockB from '../../img/bbogle_logo.png'
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
	background-image: linear-gradient(#FCF5ED, #fff);
    margin-bottom: 70px;
`;
function Plan() {
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
                        <div className='mb-[10px]'>2024. 03~ .04</div>
                    </div>
                    <div>
                        <div className='text-[gray]'>기여도</div>
                        <div className='mb-[10px]'>Plan 50 | Design 100 | FrontEnd 100</div>
                    </div>
                    <div>
                        <div className='text-[gray]'>Used</div>
                        <div className='mb-[10px]'>React,  Vite, JS</div>
                    </div>
                    <div>
                        <div className='flex gap-[10px]'>
                            <a className='w-[45px] flex' href='https://github.com/minibxx/PLANDEATH'>
                                <img src={github} />
                            </a>
                            {/* <div className='w-[50px]'>
                                <img src={ssockB} />
                            </div> */}
                        </div>
                    </div>
                </div>
                <Flex>
                    <Img >
                        <img src={ssock} />
                    </Img>
                    <div className='w-[55%]'>

                        <div className='text-[#AD6300] font-bold text-[25px] mb-[20px]'>당신의 죽음을 기획하라, 플랜데스</div>

                        {/* <div>혼자 취업을 준비하는 취준생, 새로운 직종으로 이직을 준비하는 당신, 혼자 준비하기 어렵진 않으신가요?</div> */}
                        <div>플랜데스는 죽음이라는 키워드에 가볍고 유쾌하게 다가가, 유서를 미리 작성해보고 각자의 성향을 알 수 있는 유령 유형 테스트를 진행합니다. AI로 행복했던 순간을 이미지로 재현해 추억을 되새기며, 삶의 긍정적인 면을 조명하고 희망을 되찾을 수 있도록 기획하였습니다. </div>
                        <div className='mb-[10px]'></div>
                        <div className='font-bold mt-[15px] mb-[5px]'>트러블 슈팅</div>
                        <div>Ⅰ. AI 이미지 생성을 위한 채팅 페이지 구현</div>
                        {/* <div className='ml-[12px]'>→ 사용자가 새로 입력하거나 이전에 채팅한 데이터가 누적된 리스트를 관리하는 담당</div> */}
                        <div className='ml-[12px]'>→ '...org'를 이용해 기존 배열을 수정하지 않고 배열(메시지)를 추가해 데이터를 누적하는 방식으로 구현</div>
                        <div className='ml-[12px]'>→ 'setTimeOut' 함수를 사용해 채팅에 딜레이를 주어 자연스러운 채팅 효과 구현</div>
                        <div className='mt-[10px]'>Ⅱ. 달리를 사용해 생성한 추억 이미지를 프론트 화면에 전달</div>
                        <div className='ml-[12px]'>→ 프롬프트에 입력할 추억 키워드를 'userInput' 파라미터로 서버에 전달 후 url 형태로 이미지 get</div>

                        <div className='font-bold mt-[15px] mb-[5px]'>러닝 포인트</div>
                        <div>▪️ vite를 이용한 모바일 뷰포트 설정</div>
                    </div>

                </Flex>
                <div className='mt-[15px]'> </div>

            </ContentBox>
        </>

    )
}

export default Plan
