import styled from '@emotion/styled';

export const Header = styled.div`
    width: 1000px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    svg{
        width: 40px;
        height: 40px;
        fill: black;
    }
`;

export const Text = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 34px;
    font-weight: 500;
`;

export const WriteBtn = styled.button`
    width: 120px;
    height: 40px;
    background-color: #5A66FF;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
    :hover{
        background-color: #fff;
        color: #5A66FF;
        border: 2px solid #5A66FF; 
    }
`;