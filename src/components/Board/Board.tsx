import BoardItem from '../BoardItem/BoardItem'
import * as S from './Style'
import * as I from '../../Assets/index';

export const DummyData = [
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },      
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },  
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: 'img_url',
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },    
]

const Board = () => {
    return(
        <S.Positioner>
                {DummyData && DummyData.map((item, idx) => {
                    return(
                        <S.BoardContainer key={item.id}>
                            <BoardItem 
                                id={item.id}
                                title={item.title}
                                name={item.name}
                                date={item.date}
                                like={item.like}
                                image={item.image === 'img_url' ? <I.NotFoundImg /> : 'IMG'}
                            />
                        </S.BoardContainer>
                    )}
                )}
        </S.Positioner>
    )
}

export default Board;