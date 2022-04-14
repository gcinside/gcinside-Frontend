import styled from '@emotion/styled';

export const Positioner = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 24px;
    padding: 15px 10px;
    input{
        width: 100%;
        height: 100px;
        background: transparent;
        font-size: 32pt;
        color: #495057;
        padding-left: 10px;
    }
    input:focus{
        outline: none;
    }
    input::placeholder{
        font-size: 32pt;
        color: #495057;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
`;

export const CompleteBtn = styled.button`
    width: 156px;
    height: 44px;
    border-radius: 10px;
    background-color: #5A66FF;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
    cursor: pointer;
    :hover{
        background-color: white;
        color: #5A66FF;
        border: 2px solid #5A66FF;
    }
`;

export const BackBtn = styled(CompleteBtn)`
    background-color: #868e96;
    :hover{
        background-color: white;
        color: #868e96;
        border: 2px solid #868e96;
    }
`;