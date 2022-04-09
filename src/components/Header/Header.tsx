import { useRouter } from 'next/router';
import * as S from './Style';

const Header = () => {
    const router = useRouter();
    const returnHeaderValue = (headerType: string) => {
        switch (headerType) {
            case '/home':
                return '자유게시판';
            case '/top20':
                return 'Top20';
            default:
                return '';
        }
    }
    return(
        <S.Header>
            <S.Text>{returnHeaderValue(router.pathname)}</S.Text>
            {router.pathname === '/home' && <S.WriteBtn onClick={() => router.push('/home/write')}>글쓰기</S.WriteBtn>}
        </S.Header>
    )
}

export default Header;