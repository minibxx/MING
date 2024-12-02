import React from 'react'
import ssock from '../../img/sock.png'
import styled from "styled-components";
import ssockB from '../../img/ssockB.png'
import github from '../../img/github.png'


const Flex = styled.div`
  display: flex;
	justify-content: space-between;
	
`;

const Img = styled.div`
  width: 40%;
  margin: 0px 0px;
`;

const ContentBox = styled.div`
	border-radius: 20px;
	box-shadow: 0 0 10px #D3D3D3;
	padding: 50px 110px;
	background-image: linear-gradient(#fff,#F9EDED);
`;
function Ssock() {
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
				<div>
					<div className='flex gap-[10px]'>
						<div className='w-[45px] flex'>
							<img src={github} />
						</div>
						<div className='w-[50px]'>
							<img src={ssockB} />
						</div>
					</div>
				</div>
			</div>
			<Flex>
				<div className='w-[55%]'>
					<div className='text-[#EA4C4C] font-bold text-[25px] mb-[20px]'> 내 폰 안에 쏙, SSOCK</div>
					<div>인건비를 절감하고 사용자의 편의성을 증대시키는 키오스크를 휴대폰 안에!</div>
					<div>SSOCK에서는 음성으로 누구나 편리하게 주문하고, 휴대폰 하나로 매장을 운영할 수 있습니다.</div>
					<div className='mb-[10px]'></div>
					<div className='font-bold mt-[15px] mb-[5px]'>트러블 슈팅</div>
					<div>Ⅰ. 바닐라 자바스크립트로 STT 구현</div>
					<div className='ml-[12px]'>텍스트로 변환한 주문 내역에서 공백, 줄바꿈 등의 이유로 음성 결과 대조가 정확하게 이루어지지 않음</div>
					<div className='ml-[12px]'>→ 문자열을 분할해 배열로 변환하고 다시 문자열로 재결합하여 결과 텍스트를 도출하는 방식으로 해결</div>
					<div className='mt-[10px]'>Ⅱ. HTML 코드와 Django 템플릿 언어 결합</div>
					<div className='ml-[12px]'>설계 없이 작성하다 보니 문자열, 템플릿 리터럴이 혼동되는 문제 발생</div>
					<div className='ml-[12px]'>→ 뷰-템플릿의 역할 분리하여 템플릿 태그를 최소화하고 코드 재사용성 확보하며 작업하는 방식 도입</div>
					
					<div className='font-bold mt-[15px] mb-[5px]'>러닝 포인트</div>
					<div>▪️ 프로젝트의 전 과정에 참여하며 기획, 디자인, 백엔드 파트에 대한 이해도를 높임</div>
					<div>▪️ Web Speech API를 활용한 메인 기능 (STT, TTS) 구현 기술</div>
					<div>▪️ 정해진 일정 내에서 팀원들과의 갈등 없이 상황을 모니터링하며 팀을 이끄는 경험</div>

				</div>
				<Img>
					<img src={ssock} />
				</Img>
			</Flex>
		</ContentBox>
	)
}

export default Ssock