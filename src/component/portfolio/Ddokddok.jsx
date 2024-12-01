import React from 'react'
import ssock from '../../img/ddok2.png'
import styled from "styled-components";
import ssockB from '../../img/bbogle_logo.png'
import github from '../../img/github.png'

const Flex = styled.div`
  display: flex;
	justify-content: space-between;
`;

const Img = styled.div`
  width: 40%;
  margin: 30px 0px;
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
                    <div className='w-[55%]'>

                        <div className='text-[#1B2580] font-bold text-[25px] mb-[20px]'>똑부러지는 취업, 똑바른 자세부터! 똑똑</div>

                        {/* <div>혼자 취업을 준비하는 취준생, 새로운 직종으로 이직을 준비하는 당신, 혼자 준비하기 어렵진 않으신가요?</div> */}
                        <div>똑똑에서는 희망 분야와 직무에 따라 생성한 질문으로 사용자 맞춤 모의면접을 진행하고,</div>
                        <div>면접 중 시선처리, 말 빠르기와 발음의 정확도, 답변 적절성과 자세를 분석하여 면접 태도를 피드백합니다.</div>
                        <div className='mb-[10px]'></div>
                        <div className='font-bold mt-[15px] mb-[5px]'>트러블 슈팅</div>
                        <div>Ⅰ. 미디어 파일 통신 (면접 태도를 분석할 음성 녹음본(mp3)과 화면 녹화 영상본(mp4)을 서버에 전송)</div>
                        <div className='ml-[12px]'>→ 녹음, 녹화 파일을 Blob 객체로 나누어 chunk 배열에 저장한 후 이를 File 객체로 변환하여 서버에 전송이 가능하게 세팅</div>
                        <div className='ml-[12px]'>→ 함수형 컴포넌트에서도 사용할 수 있게 구현해둔 훅을 이용해 formData 객체에 저장한 파일들을 추가하고 서버에 전송</div>
                        <div className='mt-[10px]'>Ⅱ. 시선, 음성 분석 결과 그래프 이미지 전달</div>
                        <div className='ml-[12px]'>→ 프로젝트 루트 디렉토리에 저장되는 URL을 전달 받아서 화면에 렌더링하는 방식으로 구현</div>

                        <div className='font-bold mt-[15px] mb-[5px]'>러닝 포인트</div>
                        <div>▪️ Vercel을 이용한 프론트 화면 배포 경험</div>
                        <div>▪️ 프로젝트 공통 작업(스타일, HOOK 등) 세팅, 전반적인 코드 관리</div>
                        <div>▪️ 문제점을 백엔드가 이해하지 못하고 문제삼지 않더라도 끝까지 어필하고 프론트에서 해결할 대책 마련하기 </div>
                        <div>▪️ 타 파트의 작업 과정에서 의문과 의심이 생기면 적극적으로 문제 제기하고 이슈 여부 확인하기 (감정 상하지 않고..)</div>
                    </div>

                </Flex>
                <div className='mt-[15px]'> </div>

            </ContentBox>
        </>

    )
}

export default Ddokddok
