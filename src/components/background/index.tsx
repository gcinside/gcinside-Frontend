import React from "react";
import * as S from "./style";
import GoogleLogo from "../../Assets/Google";
import GithubLogo from "../../Assets/Github";

const Wrapper = () => {
  return (
      <>
        <S.Positioner>
          <S.LeftBg />
          <S.RightBg />
          <S.LeftWrapper>
            <S.GCINSIDE>GCINSIDE</S.GCINSIDE>
            <S.TopLine />
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.BottomLine />
            <S.GCINSIDE>GCINSIDE</S.GCINSIDE>
          </S.RightWrapper>
          <S.LoginBoxWrapper>
              
              <S.LoginBox>
                <S.Header>GCINSIDE</S.Header>
                <S.OAuthBtn1>
                  <GoogleLogo/><S.Text>Google 로그인</S.Text>
                </S.OAuthBtn1>
                <S.OAuthBtn2>
                  <GithubLogo/><S.Text>Github 로그인</S.Text>
                </S.OAuthBtn2>
                <S.SignUpCommentBox>
                  <S.SignUpComment>아직 회원이 아니신가요?</S.SignUpComment>
                  <button>회원가입</button>
                </S.SignUpCommentBox>
              </S.LoginBox>
            </S.LoginBoxWrapper>
        </S.Positioner>
      </>
  );
}

export default Wrapper;