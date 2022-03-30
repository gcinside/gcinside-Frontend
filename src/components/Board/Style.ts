import { css } from '@emotion/react';

export const Positioner = css`
    width: 1000px;
    border-radius: 5px;
    background: white;
    box-shadow: 0px 2px 8px 0px #0000000D;
    margin-right: 24px;
`;

export const BoardContainer = css`
    width: 100%;
    height: 120px;
    padding: 20px;
    display: grid;
`;

export const dummy = css`
    display: flex;
    width: 100%;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    border-bottom: 1px solid #EEEEEE;
`;

export const ImageBox = css`
    display: flex;
    width: 145px;
    height: 82px;
    background-color: black;
`;

export const Wrapper = css`
    display: grid;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    margin-bottom: 15px;
`;

export const SecondWrapper = css`
    display: flex;
    font-size: 18px;
    font-weight: 350;
    color: #C2C2C2;
`;

export const TitleWrapper = css`
    display: flex;
    justify-content: left;
`;

export const NameWrapper = css`
    display: flex;
    width: 70px;
    height: 20px;
    border-right: 1px solid #c2c2c2;
    margin-right: 20px;
`;

export const LikeWrapper = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 550px;
    font-size: 18px;
    font-weight: 300;
`;