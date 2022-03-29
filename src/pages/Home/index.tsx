import { css } from '@emotion/react';
import type { NextPage } from 'next';
import * as I from '../../Assets/index';
import Board from '../../components/Board/Board';
import * as S from './Style';

const HomePage: NextPage = () => {
    return(
        <div css={S.Positioner}>
            <div css={S.Header}><I.Home css={S.svgStyle}/> Home</div>
            <Board />
        </div>
    )
}

export default HomePage;