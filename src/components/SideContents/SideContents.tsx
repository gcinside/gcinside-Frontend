import * as S from './Style';
import {Profile, Category} from '../index';

const SideContents = () => {
    return(
        <S.Contents>
            <Profile />
            <Category />
        </S.Contents>
    )
}

export default SideContents;