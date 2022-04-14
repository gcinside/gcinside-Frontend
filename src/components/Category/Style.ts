import { css } from '@emotion/react';

export const Positioner = css`
    width: 342px;
    height: 333px;
    border-radius: 5px;
    box-shadow: 0px 2px 8px 0px #0000000D;
    background-color: #FFFFFF;
    padding: 35px;
`;

export const Header = css`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    font-weight: 300;
`;

export const CategoryContainer = css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(5, 45px);
    margin-top: 20px;
    .active{
        background-color: #F1F1F1;;
        color: #5A66FF;
    }
`;

export const CategoryWrapper = css`
    width: 280px;
    height: 40px;
    padding-left: 20px;
    font-size: 18px;
    font-weight: 400;
    border-radius: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: #f5f5f5;
    }
`;