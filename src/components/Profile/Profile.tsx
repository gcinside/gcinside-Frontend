import * as S from './Style';
import * as I from '../../Assets/index';
import Link from 'next/link';

const Profile = () => {
    return(
        <div css={S.Positioner}>
            <div css={S.ImgWrapper}>
                <I.ProfileImg />
                <Link href="/Setting">
                    <div css={S.IconWrapper}>
                        <I.Setting />
                    </div>
                </Link>
            </div>
            <div css={S.UserInfo}>
                <div css={S.NameWrapper}>닉네임</div>
                <div css={S.EmailWrapper}>s00000@gsm.hs.kr</div>
            </div>
        </div>
    )
}

export default Profile;