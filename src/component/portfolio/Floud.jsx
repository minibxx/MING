import React from 'react'
import ssock from '../../img/floud title.png'
import github from '../../img/github.png'
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
	justify-content: space-between;
`;

const Img = styled.div`
  width: 500px;
  margin-right: 150px;
`;

const ContentBox = styled.div`
	border-radius: 20px;
	box-shadow: 0 0 10px #D3D3D3;
	padding: 50px 0;
	background-image: linear-gradient(#fff,#E1EDFf);
    margin-top: 30px;
`;
function Floud() {
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

                    <div className='text-[#0068FD] font-bold text-[25px] mb-[20px]'>성장의 자취를 기록하다, 플라우디</div>
                    <div>매일 작성한 KPT 회고로 자신의 하루를 돌아보는 서비스, 플라우디입니다.</div>

                    <div className='mt-[15px]'>혼자 적으면서 동기부여가 안될 때, 공개된 플랫폼에 작성하기에는 부담이 될 때, </div>
                    <div>회고 전용 플랫폼인 FlouD에서 회고를 적고 익명의 친구와 공유하며 </div>
                    <div>건강한 자극을 주고 받을 수 있습니다.</div>

                    <div className='mb-[60px] mt-[15px]'>하루 10분 회고하며 매일 1% 성장하는 당신의 하루를 기록하세요. </div>
                    <div className='w-[40px]'>
                        <img src={github} />
                    </div>

                </div>

                <Img>
                    <img src={ssock} />
                </Img>

            </Flex>
            <div className='mx-[150px]'>- 상세 업무 -
                매일 회고를 작성하고, 익명의 사용자들과 공유하며 자신의 하루를 돌아보게 하는 서비스인 플라우디를 구현했습니다. 사용자가 작성한 KPT 회고 내용을 여러 페이지에서 공유하는 기획에 따라 페이지의 깊이가 깊어졌습니다. 이 과정에서 상태 관리 라이브러리 Recoil을 사용하여 상태 의존성을 관리하며 성능을 최적화 하였습니다. 또한, 페이지 이동 시 매끄러운 화면 전환을 강조했던 디자이너의 요구에 따라 이를 구현할 방법을 모색했습니다. Request Animation Frame을 이용해 수행하고자 하는 애니메이션을 브라우저에게 전달하고, 리페인트 전에 해당 애니메이션을 업데이트하는 함수를 호출했습니다. 복잡한 setInterval을 일 일이 만들지 않고, 보다 간편하게 트랜지션을 구현할 수 있었습니다.
            </div>
            <div className='mx-[150px]'> 
                - 러닝 포인트 -
                Axios 사용이 익숙치 않았던 저는 서버와 통신하는 과정에서 항상 어려움을 겪었습니다. 프로젝트에 함께 한 팀원에게 API 폴더를 생성하고, 함수로 API를 호출 하는 코드를 분리하여 보다 체계적으로 관리하고 사용하는 법을 배웠습니다. JavaScript는 객체지향 언어가 아니기 때문에 캡슐화나 모듈화하는 것에 소홀해지
                기 쉬운데, 폴더 정리만으로도 관리가 수월해지는 것을 느꼈습니다. 나아가 앞으로의 모든 개발 과정에서 기능을 어떤 기준으로 나누고, 관리할 수 있을지 고민할 수 있는 계기가 되었습니다.


            </div>
        </ContentBox>
    )
}

export default Floud