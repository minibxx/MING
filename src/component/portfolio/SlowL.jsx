
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
                        <img src={floudB} />
                    </div>
                </div>
            </div>
        </div>
        <Flex>
            <div className='w-[55%]'>
            <div className='text-[#3F8424] font-bold text-[25px] mb-[20px]'>성장의 자취를 기록하다, 플라우디</div>

            <div className='mt-[15px]'>혼자 플래너를 적으면서 동기부여가 안될 때, 공개된 플랫폼에 작성하기에는 부담이 될 때, </div>
                    <div>회고 전용 플랫폼인 FlouD에서 회고를 적고 익명의 친구와 공유하며 건강한 자극을 주고 받을 수 있습니다. </div>
                <div className='mb-[10px]'></div>
                <div className='font-bold mt-[15px] mb-[5px]'>트러블 슈팅</div>
                <div>Ⅰ. 페이지 계층 구조에 따른 전역 상태 관리</div>
                <div className='ml-[12px]'>사용자가 작성한 KPT 회고 내용을 여러 페이지에서 공유하는 기획에 따라 페이지의 깊이가 깊어짐</div>
                <div className='ml-[12px]'>→  상태 관리 라이브러리 Recoil을 사용하여 상태 의존성을 관리하며 성능을 최적화</div>
                <div className='mt-[10px]'>Ⅱ. 페이지 이동 시 매끄러운 화면 트랜지션</div>
                <div className='ml-[12px]'>setInterval을 일일이 만들기에는 복잡함 → Request Animation Frame을 이용해 수행하고자 하는 <br/> 애니메이션을 브라우저에게 전달하고, 리페인트 전에 해당 애니메이션을 업데이트하는 함수를 호출</div>
                
                <div className='font-bold mt-[15px] mb-[5px]'>러닝 포인트</div>
                <div>▪️ API 폴더를 생성하고, 함수로 API를 호출 하는 코드를 분리하여 보다 체계적으로 관리하고 사용</div>
                <div>▪️ 객체지향 언어가 아닌 JavaScript 사용 시에 캡슐화나 모듈화에 소홀해지지 않고 폴더를 정리하여 관리 </div>
                <div>▪️ 개발 과정에서 기능을 어떤 기준으로 나누고, 관리할 수 있을지 고민하는 습관</div>
                
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
