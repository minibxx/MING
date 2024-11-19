import React from 'react'
import ssock from '../../img/ddokddok img.png'
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
	justify-content: space-between;
`;

const Img = styled.div`
  width: 600px;
 
`;

const ContentBox = styled.div`
	border-radius: 20px;
	box-shadow: 0 0 10px #D3D3D3;
	padding: 50px 150px ;
	background-image: linear-gradient(#fff,#DBDEF5);
    margin-top: 30px;
`;
function Ddokddok() {
    return (
        <ContentBox>
            <div className='flex gap-[50px] py-[30px]'>
                
                <div>
                    <div className='text-[gray]'>Project</div>
                    <div className='mb-[10px]'>UIUX | Frontend</div>
                </div>
                <div>
                    <div className='text-[gray]'>Period</div>
                    <div className='mb-[10px]'>2023. 07~ .08</div>
                </div>
                <div>
                    <div className='text-[gray]'>기여도</div>
                    <div className='mb-[10px]'>Plan 70 | Design 100 | FrontEnd 50</div>
                </div>
                <div>
                    <div className='text-[gray]'>Used</div>
                    <div className='mb-[10px]'>HTML, CSS</div>
                </div>
            </div>
            <Flex>
            <Img>
                    <img src={ssock} />
                </Img>
                <div className=''>

                    <div className='text-[#1B2580] font-bold text-[25px] mb-[20px]'>[ddokddok] 똑부러지는 취업, 똑바른 자세부터! 똑똑</div>

                    <div>모의 면접을 통해 사용자의 면접 능력을 분석하고, 평가하여 면접 태도를 개선하는 똑똑입니다. </div>
                    <div>혼자 취업을 준비하는 취준생, 새로운 직종으로 이직을 준비하는 당신, 혼자 준비하기 어렵진 않으신가요?</div>
                    {/* <div>똑똑에서는 희망 분야와 직무에 따라 생성한 질문으로 면접을 진행하고,</div>
                    <div>면접 중 시선처리, 말 빠르기와 발음의 정확도, 답변 적절성과 자세를 분석합니다.</div> */}
                    <div>막연한 취업, 겁먹지 말고 똑똑과 함께 똑똑하게 준비하세요!</div>
                </div>

            </Flex>
        </ContentBox>
    )
}

export default Ddokddok