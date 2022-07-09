import type { NextPage } from 'next';
import { Header, Board, SideContents } from '../components/index';
import styled from '@emotion/styled';

const Positioner = styled.div`
  width: 100%;
  padding: 15vh 0 15vh 15vh;
`;

const SettingPage: NextPage = () => {
  return (
    <Positioner>
      <Header />
      <SideContents />
    </Positioner>
  );
};

export default SettingPage;
