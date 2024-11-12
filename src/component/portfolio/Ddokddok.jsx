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
                    <div>태도 개선 기반 모의 면접 서비스 </div>
                </div>

            </Flex>

        </ContentBox>
    )
}

export default Ddokddok