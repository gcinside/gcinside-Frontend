import { css } from "@emotion/react";

export const Positioner = css`
    width: 320px;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-rows: repeat(2, 180px);
    background-color: #131314;
`;

export const LogoWrapper = css`
    width: 280px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SidebarListWrapper = css`
    width: 100%;
    height: 290px;
    display: grid;
    align-content: space-around;
    border-top: 1px solid #585858;
    border-bottom: 1px solid #585858;
    color: white;
    font-size: 24px;
    padding: 40px 0 40px 0;
    a{
        width: 230px;
        height: 55px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        column-gap: 40px;
        text-decoration: none;
        color: white;
        text-align: left;
        border-radius: 0 30px 30px 0;
        cursor: pointer;
        svg{
            margin-left: 25px;
        }    
    }

`;