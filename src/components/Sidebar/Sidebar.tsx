import React from 'react';
import * as S from './Style';
import * as I from '../../Assets/index';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {
    const router = useRouter();
    return (
        <>
            <S.Positioner>
                <S.LogoWrapper><I.Logo /></S.LogoWrapper>
                <S.SidebarListWrapper>
                    <Link href="/home"><a className={router.pathname === "/home" ? 'active' : ''} css={{ backgroundColor: router.pathname === "/home" ? '#5A66FF' : '' }}><I.Home/>Home</a></Link>
                    <Link href="/Top20"><a className={router.pathname === "/Top20" ? 'active' : ''} css={{ backgroundColor: router.pathname === "/Top20" ? '#5A66FF' : '' }}><I.Top20/>Top 20</a></Link>
                    <Link href="/Setting"><a className={router.pathname === "/Setting" ? 'active' : ''} css={{ backgroundColor: router.pathname === "/Setting" ? '#5A66FF' : '' }}><I.Setting/>Setting</a></Link>
                </S.SidebarListWrapper>
            </S.Positioner>
            <S.SidebarContainer />
        </>
    )
}

export default SideBar;