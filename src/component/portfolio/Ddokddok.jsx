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

                        <div className='text-[#1B2580] font-bold text-[25px] mb-[20px]'>[DDOKDDOK] 똑부러지는 취업, 똑바른 자세부터! 똑똑</div>

                        <div>혼자 취업을 준비하는 취준생, 새로운 직종으로 이직을 준비하는 당신, 혼자 준비하기 어렵진 않으신가요?</div>
                        <div>똑똑에서는 희망 분야와 직무에 따라 생성한 질문으로 사용자 맞춤 모의면접을 진행하고,</div>
                        <div>면접 중 시선처리, 말 빠르기와 발음의 정확도, 답변 적절성과 자세를 분석합니다.</div>
                        <div className='mt-[15px]'>막연한 취업, 이제는 겁먹지 말고 똑똑과 함께 똑똑하게 준비하세요!</div>

                        <div className='font-bold mt-[10px] mb-[3px]'>상세 업무</div>
                        <div>
                            텍스트 데이터를 필요로 하는 답변 분석과 달리 시선, 말 빠르기 분석 을 위해 면접 태도를 분석할 음성 녹음본(mp3)과 화면 녹화 영상본(mp4) 전송이 필요했습니다. 먼저 저는 타이밍에 맞게 녹화와 녹음을 진행해 파일을 생성하고, 각 파일들을 Blob 객체로 나누어 chunk 배열에 저장했습니다. 이후 Blob 객체를 File 객체로 변환하여 서버에 전송할 수 있는 형태로 세팅했습니다. 또한, 함 수형 컴포넌트에서도 사용할 수 있게 구현해둔 훅을 이용해 formData 객체에 저장한 파일들을 추가하고 서버에 전송할 수 있게 했습니다. 텍스트가 아닌 파일을 서버로 전송해 활용하는 새로운 방식과 개념을 경험할 수 있어 흥미로웠습니다.
                        </div>
                        <div className='font-bold mt-[10px] mb-[3px]'>러닝 포인트</div>
                        <div >
                            이 프로젝트는 개발 경험이 적은 팀원이 대부분이라 포지션을 정하는 것부터 어려움이 있었습니다. 파트가 재조정되면서 프론트엔드를 혼자 담당하게 된 데다가 신경 써야 할 것이 배로 늘어났습니다. 웹 통신 과정이나 백엔드 로직에 대해서도 함께 고민해야 했고, 부족한 지식으로 팀원들을 이해시키고 납득시켜야 하는 일이 잦았습니다. 결국 배포 서버로 전송한 영상 및 음성 파일에 접근해 분석 코드를 적용하는 것이 불가능하다는 점이 마감에 닥쳐서야 대두되었습니다. 팀원들을 의심하고 분위기를 와해시키고 싶지 않아 한 발 물러섰던 것이 결국 큰 문제로 돌아오게 되었습니다. 프로젝트의 효율적인 진행을 위해 앞으로는 잘 아는 파트와 내용이 아니더라도 의문과 의심이 생기면 보다 적극적으로 문제 제기를 하고, 이슈 여부를 함께 확인하겠다고 다짐했습니다.
                        </div>

                    </div>

                </Flex>
                <div className='mt-[15px]'> </div>

            </ContentBox>
        </>

    )
}

export default Ddokddok
