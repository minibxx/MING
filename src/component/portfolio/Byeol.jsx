
import React from 'react'
import ssock from '../../img/Byeol.png'
import styled from "styled-components";
import ssockB from '../../img/bbogle_logo.png'
import github from '../../img/github.png'

const Flex = styled.div`
  display: flex;
	justify-content: space-between;
`;

const Img = styled.div`
  width: 35%;
  margin: 30px 0px;
`;

const ContentBox = styled.div`
	border-radius: 20px;
	box-shadow: 0 0 10px #D3D3D3;
	padding: 30px 110px ;
	background-image: linear-gradient(#FFF6E0, #fff);
    margin-bottom: 70px;
`;
function Byeol() {
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
                                <img src={ssockB} />
                            </div>
                        </div>
                    </div>
                </div>
                <Flex>
                    <Img >
                        <img src={ssock} />
                    </Img>
                    <div className='w-[60%]'>

                        <div className='text-[#F45852] font-bold text-[25px] mb-[20px]'>사주 기반 소개팅 매칭 서비스, 별별연인</div>

                        {/* <div>혼자 취업을 준비하는 취준생, 새로운 직종으로 이직을 준비하는 당신, 혼자 준비하기 어렵진 않으신가요?</div> */}
                        <div>별별연인에서는 생년월일, 태어난 시를 입력하여 정보를 등록하면 사주가 맞는 회원리스트를 보여줍니다. 서로를 찜해 매칭된 커플에게만 연락처가 공개됩니다. 외모나 스펙 상관없이 운명의 상대를 만나보세요~ </div>
                        <div className='mb-[10px]'></div>
                        <div className='font-bold mt-[15px] mb-[5px]'>트러블 슈팅</div>
                        <div>Ⅰ. Bard Api 사용시 요청이 늘어나면 Bard 측에서 Api 호출을 막는 이슈 발생</div>
                        <div className='ml-[12px]'>→ 챗지피티 Api로 대체하여 해결</div>
                        <div className='mt-[10px]'>Ⅱ. 클라이언트 사이드에서 요청시 수행이 되지 않는 이슈 발생</div>
                        <div className='ml-[12px]'>→ API 폴더를 따로 생성 및 관리하여 서버 사이드로 요청 수행</div>
                        <div className='ml-[12px]'>→ 500 서버 에러 발생하여 My sql 분리, 명칭 변경</div>
                        <div className='font-bold mt-[15px] mb-[5px]'>러닝 포인트</div>
                        <div>▪️ Vercel을 이용한 프론트 화면 배포 경험</div>
                        <div>▪️ 프로젝트 공통 작업(스타일, HOOK 등) 세팅, 전반적인 코드 관리</div>
                        <div>▪️ 문제점을 백엔드가 이해하지 못하고 무시하더라도 끝까지 어필하고 프론트에서 해결할 대책 마련할 것 </div>
                        <div>▪️ 타 파트의 작업 과정에서 의문과 의심이 생기면 적극적으로 문제 제기하고 이슈 여부 확인할 것</div>
                    </div>

                </Flex>
                <div className='mt-[15px]'> </div>

            </ContentBox>
        </>

    )
}

export default Byeol
