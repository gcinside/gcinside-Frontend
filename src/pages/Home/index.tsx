import type { NextPage } from 'next';
import * as I from '../../Assets/index';
import Board from '../../components/Board/Board';
import Category from '../../components/Category/Category';
import Profile from '../../components/Profile/Profile';
import * as S from './Style';

const HomePage: NextPage = () => {
    return(
        <div css={S.Positioner}>
            <div css={S.Header}><I.Home css={S.svgStyle}/> Home</div>
            <div css={S.Components}>
                <Board />
                <div css={S.Contents}>
                    <Profile />
                    <Category />
                </div>
            </div>
        </div>
    )
}

export default HomePage;