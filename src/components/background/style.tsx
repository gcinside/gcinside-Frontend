import styled from "@emotion/styled";

export const Flex = styled.div` //display:flex, jus-con: ctr, align-itm: ctr;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
  background-color: #10154A;
`;
export const LoginBox = styled(Flex)`
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