import React from "react";
import * as S from "./style";
import GoogleLogo from "@/src/utils/Google";
import GithubLogo from "@/src/utils/Github";
import CTL from "./controller.png";

const Wrapper = () => {
  return (
      <>
        <S.Wrapper>
          <img className="CTL" src={CTL.src} alt="controller-image"/>
          <S.LoginBox>
            <S.Text>로그인</S.Text>
            <S.OAuthBox1>
              <GoogleLogo/><S.Text>Google 로그인</S.Text>
            </S.OAuthBox1>
            <S.OAuthBox2>
              <GithubLogo/><S.Text>Github 로그인</S.Text>
            </S.OAuthBox2>
          </S.LoginBox>
        </S.Wrapper>
      </>
  );
}

export default Wrapper;