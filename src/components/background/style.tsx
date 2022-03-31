import styled from "@emotion/styled";

export const Flex = styled.div` // 재사용
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Positioner = styled(Flex)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const LeftBg = styled(Flex)`
  width: 100%;
  height: 100%;
  background: linear-gradient(-130deg, #7A85FF 10.55%, rgba(122, 133, 255, 0.03) 250.02%);
  position: fixed;
  left: 0;
`;
export const RightBg = styled(Flex)`
  width: 74%;
  height: 100%;
  background: #98AFFF;
  position: fixed;
  right: 0;
  transform:
    skew(-20deg)
    translate(55vh, 0px);
`;
export const GCINSIDE = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 130px;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #FFFFFF;
  z-index: 1;
`;

export const TopLine = styled(Flex)`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #FFFFFF;
  margin-left: 5vh;
`;

export const BottomLine = styled(Flex)`
  width: 100%;
  height: 100px;
  border-top: 2px solid #FFFFFF;
  margin-right: 5vh;
`;

export const LeftWrapper = styled(Flex)`
  position: fixed;
  width: 100%;
  top: -80px;
  left: 0;
`;
export const RightWrapper = styled(Flex)`
  position: fixed;
  width: 100%;
  bottom: -70px;
  right: 0;
`;
export const LoginBoxWrapper = styled(Flex)`
  flex-direction: column;
  z-index: 1;
`;
export const LoginBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 544px;
  height: 700px;
  background: linear-gradient(147.66deg, rgba(255, 255, 255, 0.18) -0.87%, rgba(255, 255, 255, 0.03) 101.49%);
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 10px 10px 30px 0px #0000000D;
  box-shadow: -10px -10px 30px 0px #FFFFFF0D;
  box-shadow: 6px 6px 16px 0px #FFFFFF1A inset;
  box-shadow: -6px -6px 16px 0px #FFFFFF1A inset;
  backdrop-filter: blur(20px);
  border-radius: 25px;
`;

export const Header = styled(Flex)`
  width: 100%;
  height: 30vh;
  font-family: 'Noto Sans KR', sans-serif;
  color: #FFFFFF;
  font-size: 56px;
  font-weight: 300;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  margin-left: 2vh;
`;
export const OAuthBtn1 = styled(Flex)`
  width: 464px;
  height: 72px;
  background: #FFFFFF;
  border-radius: 15px;
  color: black;
`;
export const OAuthBtn2 = styled(OAuthBtn1)`
  margin-top: 2vh;
  background: #24292F;
  color: white;
`;

export const SignUpCommentBox = styled(Flex)`
  width: 100%;
  margin-bottom: 15vh;
  button {
    margin-left: 1.5vh;
    border: none;
    background : none;
    font-family: 'Noto Sans KR', sans-serif;
    color: #1D96F0;
    font-size: 16px;
    margin-bottom: 3px;
  }
`;
export const SignUpComment = styled(Text)`
  font-weight: lighter;
  font-size: 16px;
  line-height: 60px;
  color: white;
`;