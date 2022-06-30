import styled from '@emotion/styled';

export const Positioner = styled.div`
    width: 342px;
    height: 180px;
    border-radius: 5px;
    box-shadow: 0px 2px 8px 0px #0000000D;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    margin-top: 65px;
    margin-left: -20px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 2px 8px 0px #0000000D;
    cursor: pointer;
    transition: all ease 1s;
    :hover{
        transform: rotate(90deg);
    }
`;

export const ImgWrapper = styled.div`
    width: 170px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UserInfo = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const NameWrapper = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 2px;
`;

export const EmailWrapper = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #C9C9C9;
`;