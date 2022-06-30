import * as S from './Style';
import * as I from '../../Assets/index';
import Link from 'next/link';

const Profile = () => {
    return(
        <S.Positioner>
            <S.ImgWrapper>
                <I.ProfileImg />
                <Link href="/Setting">
                    <S.IconWrapper>
                        <I.Setting />
                    </S.IconWrapper>
                </Link>
            </S.ImgWrapper>
            <S.UserInfo>
                <S.NameWrapper>닉네임</S.NameWrapper>
                <S.EmailWrapper>s00000@gsm.hs.kr</S.EmailWrapper>
            </S.UserInfo>
        </S.Positioner>
    )
}

export default Profile;