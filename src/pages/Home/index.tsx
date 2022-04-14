import type { NextPage } from 'next';
import * as S from './Style';
import {Header, Board, SideContents} from '../../components/index';

const HomePage: NextPage = () => {
    return(
        <S.Positioner>
            <Header />
            <S.Components>
                <Board />
                <SideContents />
            </S.Components>
        </S.Positioner>
    )
}

export default HomePage;