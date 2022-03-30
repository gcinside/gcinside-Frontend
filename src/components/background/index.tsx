import React from "react";
import * as S from "./style";
import GoogleLogo from "@/src/utils/Google";
import GithubLogo from "@/src/utils/Github";
import ExImage from '/src/components/controller.png';
import Image from 'next/image';

const Wrapper = () => {
  return (
      <>
        <img src={ExImage} alt='이미지 테스트' />
        <S.Wrapper>
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