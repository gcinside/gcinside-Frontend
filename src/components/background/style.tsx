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
  .CTL {
    width: 670px;
    height: 620px;
    z-index: 0;
    margin-bottom: 8vh;
    margin-top: -3vh;
  }
  .RC {
    width: 330px;
    height: 330px;
    z-index: -1;
    margin-bottom: -30vh;
    margin-right: -75vh;
  }
  .LC {
    width: 180px;
    height: 180px;
    z-index: -1;
    margin-top: -25vh;
    margin-left: -40vh;
  }
`;
export const GCINSIDE = styled.p`
  margin-top: -11vh;
  margin-left: -42vh;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 130px;
  font-weight: bold;
  -webkit-text-fill-color: #10154A;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #FFFFFF;
  z-index: 1;
`;
export const LeftWrapper = styled(Flex)`
  flex-direction: column;
`;
export const RightWrapper = styled(LeftWrapper)`
  flex-direction: column;
  .right {
    margin-bottom: -13.5vh;
    margin-right: -88vh;
  }
`;
export const LoginBoxWrapper = styled(Flex)`
  flex-direction: column;
  z-index: 1;
  margin-bottom: 15.5vh;
`;
export const LoginBox = styled(Flex)`
  margin-left: 25vh;
  flex-direction: column;
  width: 485px;
  height: 620px;
  background: linear-gradient(147.66deg, rgba(255, 255, 255, 0.18) -0.87%, rgba(255, 255, 255, 0.03) 101.49%);
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: -15px 4px 18px rgba(0, 0, 0, 0.25), 12px 4px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 25px;
`;
export const TextBox = styled(Flex)`
  width: 100%;
  height: 30vh;
`;
export const Text = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  color: #FFFFFF;
  line-height: 50px;
`;
export const OAuthBtn1 = styled(Flex)`
  width: 425px;
  height: 65px;
  background: #FFFFFF;
  border-radius: 15px;
  box-shadow : 0 0 10px 0 #FFFFFF;
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin-left: 2vh;
  }
`;
export const OAuthBtn2 = styled(OAuthBtn1)`
  margin-top: 2vh;
  background: #5A66FF;
  box-shadow : 0 0 10px 0 #5A66FF
`;
export const SignUpCommentBox = styled(Flex)`
  width: 22vh;
  button {
    margin-left: 1.5vh;
    border: none;
    background : none;
    font-family: 'Noto Sans KR', sans-serif;
    color: #1D96F0;
    font-size: 15px;
    margin-bottom: 20vh;
  }
`;
export const SignUpComment = styled(Text)`
  font-weight: lighter;
  font-size: 15px;
  margin-bottom: 20vh;
  line-height: 60px;
`;