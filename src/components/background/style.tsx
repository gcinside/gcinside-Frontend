import styled from "@emotion/styled";

export const Flex = styled.div` // 재사용
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
  background-color: #10154A;
`;
export const ImageG = styled.img`
  width: 100%;
  height: 100%;
`
export const LoginBox = styled(Flex)`
  flex-direction: column;
  width: 600px;
  height: 740px;
  background: linear-gradient(147.66deg, rgba(255, 255, 255, 0.18) -0.87%, rgba(255, 255, 255, 0.03) 101.49%);
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: -15px 4px 18px rgba(0, 0, 0, 0.25), 12px 4px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(52px);
  border-radius: 25px;
`;
export const Text = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 93px;
  color: #FFFFFF;
`;
export const OAuthBox1 = styled(Flex)`
  width: 520px;
  height: 78px;
  background: #FFFFFF;
  border-radius: 15px;
  box-shadow : 0 0 10px 0 #FFFFFF;
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: black;
    margin-left: 2vh;
  }
`;
export const OAuthBox2 = styled(OAuthBox1)`
  margin-top: 2vh;
  background: #5A66FF;
  box-shadow : 0 0 10px 0 #5A66FF
`
