import React from 'react'
import ssock from '../../img/ssock mo.png'
import styled from "styled-components";
import ssockB from '../../img/ssockB.png'
import github from '../../img/github.png'


const Flex = styled.div`
  display: flex;
	justify-content: space-between;
	
`;

const Img = styled.div`
  width: 50%;
  margin: 30px 0px;
`;

const ContentBox = styled.div`
	border-radius: 20px;
	box-shadow: 0 0 10px #D3D3D3;
	padding: 50px 0 50px 150px ;
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
					<div className='text-[#EA4C4C] font-bold text-[25px] mb-[20px]'>[SSOCK] 디지털 격차 해소를 위한 음성인식 모바일 키오스크, 쏙</div>
					<div>인건비를 절감하고 사용자의 편의성을 증대시키기 위해 도입된 키오스크.</div>

					<div>키오스크는 바쁜 소상공인과 사용이 미숙한 디지털 약자에게 불편한 점이 많아 개선이 시급합니다.</div>
					<div className='mb-[10px]'>음성인식 기반으로 누구나 편리하게 주문하고 판매할 수 있는 서비스, SSOCK 은 어떠신가요?</div>
					<div className='font-bold mt-[10px] mb-[3px]'>상세 업무</div>
					<div>
						바닐라 자바스크립트로 STT를 구현하여 음성으로 원하는 메뉴를 주문하고, 판매 목록에 없을 경우 '해당 메뉴는 판매하지 않습니다.' 라는 메시지를 구현해야 하는 상황이었습니다.
						사용자가 음성으로 주문한 메뉴를 텍스트로 전환했을 때 공백, 줄바꿈 등의 이유로 음성 결과 대조가 정확하게 이루어지지 않는 문제점이 있었습니다. 문자열을 분할해 배열로 변환하고 다시 문자열로 재결합하여 결과 텍스트를 도출하는 방식으로 구현했습니다.
					바닐라 자바스크립트로 STT와 TTS를 구현한 코드에 Django 템플릿 언어를 결합하는 과정에서 문자열, 템플릿 리터럴이 충돌되어 제대로 
					</div>
					<div></div>
					<div className='font-bold mt-[10px] mb-[3px]'>러닝 포인트</div>
					<div>
						프로젝트를 처음 경험하는 팀원들과 함께하게 되면서 팀을 이끌기 위해 다양한 업무를 적극적으로 수행했습니다. 제 역할을 개발로 한정짓지 않고, 프로젝트 기획과 디자인을 포함한 전 과정을 주도했습니다. 백엔드의 부담을 덜기 위해 메인 기능을 프론트 단에서 구현하였습니다. 엉성한 백엔드 코드로 오류가 발생할 때에도 테스트를 지원하기 위한 방법을 제시해 모두가 각자의 역할을 다할 수 있도록 도왔습니다.
						팀을 이끌어야 할 때는 일에 차질이 생기지 않는 선에서 팀원들의 능력을 존중하며 일정을 체크하고, 또 감정이 상하지 않는 선에서 상황을 모니터링합니다. 리더쉽과 팔로우쉽을 모두 배우며 상황에 맞게 팀을 서포트하는 태도를 갖출 수 있었습니다.</div>
					<div></div>
				</div>

				<Img>
					<img src={ssock} />
				</Img>
			</Flex>
		</ContentBox>
	)
}

export default Ssock