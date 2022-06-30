// import { useRouter } from 'next/router';
import * as S from './Style';

interface BoardItemProps {
    id: number;
    title: string;
    name: string;
    date: string;
    like: number;
    image: any;
}

const BoardItem:React.FC<BoardItemProps> = ({
    id,
    title,
    name,
    date,
    like,
    image
}) => {
    
    return(
        <S.DummyContainer key={id}>
            <S.ImageBox>{image}</S.ImageBox>
            <S.Wrapper>
                <S.TitleWrapper>{title}</S.TitleWrapper>
                <S.SecondWrapper>
                    <S.NameWrapper>{name}</S.NameWrapper>
                    {date}
                </S.SecondWrapper>
            </S.Wrapper>
            <S.LikeWrapper>{like}K</S.LikeWrapper>
    </S.DummyContainer>  
    )

}

export default BoardItem;