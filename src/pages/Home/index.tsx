import type { NextPage } from 'next';
import * as S from './Style';
import {Header, Board} from '../../components/index';
import SideContents from '@/src/components/SideContents/SideContents';

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