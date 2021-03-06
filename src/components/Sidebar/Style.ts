import styled from "@emotion/styled";

export const Positioner = styled.div`
    width: 320px;
    height: 100vh;
    grid-template-rows: repeat(2, 180px);
    background-color: #131314;
    position: fixed;
    top: 0;
`;

export const SidebarContainer = styled.div`
    width: 320px;
    height: 100vh;
`;

export const LogoWrapper = styled.div`
    width: 280px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SidebarListWrapper = styled.div`
    width: 320px;
    height: 290px;
    display: grid;
    align-content: space-around;
    border-top: 1px solid #585858;
    border-bottom: 1px solid #585858;
    color: white;
    font-size: 24px;
    padding: 40px 0 40px 0;
    .active:hover{
        background: #5A66FF;
    }
    a{
        width: 230px;
        height: 60px;
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
        :hover{
            background: #595959;
        }
    }

`;