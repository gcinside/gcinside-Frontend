// import { useRouter } from 'next/router';
import * as S from './Style';

interface BoardItemProps {
  id: number;
  name: string;
  description: string;
  image: any;
}

const BoardItem: React.FC<BoardItemProps> = ({
  id,
  name,
  description,
  image,
}) => {
  return (
    <S.DummyContainer key={id}>
      <S.ImageBox>{image}</S.ImageBox>
      <S.Wrapper>
        <S.TitleWrapper>{name}</S.TitleWrapper>
        <S.SecondWrapper>{description}</S.SecondWrapper>
      </S.Wrapper>
    </S.DummyContainer>
  );
};

export default BoardItem;
