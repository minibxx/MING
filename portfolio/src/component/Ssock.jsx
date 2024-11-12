import React from 'react'
import ssock from '../img/ssock mockup.png'
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;

const Img = styled.div`
  width: 80px;
`;
function Ssock() {
    return (
        <>
            <div>[SSOCK] 음성인식 모바일 키오스크, 쏙</div>
            <Flex>
                <div>

                    <div>인건비를 절감하고 사용자의 편의성을 증대시키기 위해 도입된 키오스크.</div>

                    <div>키오스크는 사용자와 관리자 모두에게 불편한 점이 많아 개선이 시급합니다.</div>
                    <div>SSOCK은 시니어 층과 장애인을 비롯한 디지털 약자와 바쁜 현대인,</div>
                    <div>가게 운영에 어려움을 겪는 소상공인을 주 타겟으로,</div>
                    <div>디지털 격차를 해소하고 더 나은 사용자 경험을 제공합니다. </div>
                </div>

                <Img>
                    <img src={ssock} />
                </Img>
            </Flex>
        </>
    )
}

export default Ssock