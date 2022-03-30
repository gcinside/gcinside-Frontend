import React from "react";
import * as S from "./style";
import GoogleLogo from "@/src/utils/Google";
import GithubLogo from "@/src/utils/Github";
import CTL from "./controller.png";
import LC from "./left-cone.png";
import RC from "./right-cone.png";

const Wrapper = () => {
  return (
      <>
        <S.Wrapper>
          <S.LeftWrapper>
            <S.GCINSIDE>GCINSIDE</S.GCINSIDE>
            <img className="CTL" src={CTL.src} alt="controller-image"/>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.LoginBoxWrapper>
              <div className="Line" />
              <img className="RC" src={RC.src} alt="cone-image"/>
              <S.LoginBox>
                <S.TextBox><S.Text>로그인</S.Text></S.TextBox>
                <S.OAuthBtn1>
                  <GoogleLogo/><S.Text>Google 로그인</S.Text>
                </S.OAuthBtn1>
                <S.OAuthBtn2>
                  <GithubLogo/><S.Text>Github 로그인</S.Text>
                </S.OAuthBtn2>
                <S.SignUpCommentBox>
                  <S.SignUpComment>계정이 없으신가요?</S.SignUpComment>
                  <button>회원가입</button>
                </S.SignUpCommentBox>
              </S.LoginBox>
              <img className="LC" src={LC.src} alt="cone-image"/>
            </S.LoginBoxWrapper>
            <div className="Line1" />
            <S.GCINSIDE className="right">GCINSIDE</S.GCINSIDE>
          </S.RightWrapper>
        </S.Wrapper>
      </>
  );
}

export default Wrapper;