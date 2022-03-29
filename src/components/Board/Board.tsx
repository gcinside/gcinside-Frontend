import * as S from './Style'

const DummyData = [
        {
            id: 1,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 2,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 3,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 4,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
        {
            id: 5,
            image: <div css={S.ImageBox}></div>,
            title: '게시글 이름',
            name: '닉네임',
            date: '2022.03.29',
            like: 5,
        },
]

const Board = () => {
    return(
        <div css={S.Positioner}>
                {DummyData && DummyData.map((item) => {
                    return(
                        <>
                            <div css={S.BoardContainer}>
                                <div css={S.dummy} key={item.id}>
                                    {item.image}
                                    <div css={S.Wrapper}>
                                        <div css={S.TitleWrapper}>{item.title}</div>
                                        <div css={S.SecondWrapper}>
                                            <div css={S.NameWrapper}>{item.name}</div>
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
        </div>
    )
}

export default Board;