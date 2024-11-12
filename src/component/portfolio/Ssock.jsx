import React from 'react'
import ssock from '../../img/ssock mo.png'
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
	justify-content: space-between;
`;

const Img = styled.div`
  width: 700px;
`;

const ContentBox = styled.div`
	border-radius: 20px;
	box-shadow: 0 0 10px #D3D3D3;
	padding: 50px 0;
	background-image: linear-gradient(#fff,#F9EDED);
`;
function Ssock() {
	return (
		<ContentBox>
		
			<Flex>
				<div className='ml-[150px]'>
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

					<div className='text-[#EA4C4C] font-bold text-[25px] mb-[20px]'>[SSOCK] 디지털 격차 해소를 위한 음성인식 모바일 키오스크, 쏙</div>
					<div>인건비를 절감하고 사용자의 편의성을 증대시키기 위해 도입된 키오스크.</div>

					<div>키오스크는 사용자와 관리자 모두에게 불편한 점이 많아 개선이 시급합니다.</div>
					<div>SSOCK은 시니어 층과 장애인을 비롯한 디지털 약자와 바쁜 현대인,</div>
					<div>가게 운영에 어려움을 겪는 소상공인을 주 타겟으로,</div>
					<div className='mb-[60px]'>디지털 격차를 해소하고 더 나은 사용자 경험을 제공합니다. </div>


				</div>

				<Img>
					<img src={ssock} />
				</Img>
			</Flex>
		</ContentBox>
	)
}

export default Ssock