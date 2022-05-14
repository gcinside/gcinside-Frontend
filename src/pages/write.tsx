import { Write } from '../components/index';
import styled from "@emotion/styled";
import { NextPage } from 'next';

const Positioner = styled.div`
    display: flex;
    width: 100%;
    padding: 10vh 15vh 5vh 15vh;
`;

const WritePage: NextPage = () => {
    return(
        <Positioner>
            <Write />
        </Positioner>
    );
}

export default WritePage;