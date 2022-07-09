import BoardItem from '../BoardItem/BoardItem';
import * as S from './Style';
import * as I from '../../Assets/index';
import { useEffect, useState } from 'react';
import { getBoardItem } from '@/src/api/Api';

export const DummyData = [
  {
    id: 1,
    image: 'img_url',
    name: 'GSM 갤러리',
    description: 'GSM갤러리입니다.',
  },
  {
    id: 2,
    image: 'img_url',
    name: '테스트 갤러리',
    description: '테스트 갤러리 입니다.',
  },
];

const Board = () => {
  const [galleryList, setGalleryList] = useState([]);
  useEffect(() => {
    getBoardItem().then(res => {
      res && setGalleryList(res.data.gallery_list);
    });
  }, []);
  return (
    <S.Positioner>
      {DummyData &&
        DummyData.map((item, idx) => {
          return (
            <S.BoardContainer key={item.id}>
              <BoardItem
                id={item.id}
                description={item.description}
                name={item.name}
                image={item.image === 'img_url' ? <I.NotFoundImg /> : 'IMG'}
              />
            </S.BoardContainer>
          );
        })}
    </S.Positioner>
  );
};

export default Board;
