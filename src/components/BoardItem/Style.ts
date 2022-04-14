import styled from "@emotion/styled";

export const DummyContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    padding-left: 30px;
    border-bottom: 1px solid #EEEEEE;
    transition: all 0.3s ease;
    :hover {
        box-shadow: 0 0 10px #ccc;
    }
`;

export const ImageBox = styled.div`
    display: flex;
    width: 145px;
    height: 80px;
`;

export const Wrapper = styled.div`
    display: grid;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    margin-bottom: 15px;
`;

export const SecondWrapper = styled.div`
    display: flex;
    font-size: 18px;
    font-weight: 350;
    color: #C2C2C2;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: left;
`;

export const NameWrapper = styled.div`
    display: flex;
    width: 70px;
    height: 20px;
    border-right: 1px solid #c2c2c2;
    margin-right: 20px;
`;

export const LikeWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 550px;
    font-size: 18px;
    font-weight: 300;
`;