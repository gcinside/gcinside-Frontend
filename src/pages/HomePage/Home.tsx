import type { NextPage } from 'next';
import * as I from '../../Assets/index';
import * as S from './Style';

const HomePage: NextPage = () => {
    return(
        <div css={S.Positioner}>
            <div css={S.Header}><I.Home css={S.svgStyle}/> Home</div>
        </div>
    )
}

export default HomePage;