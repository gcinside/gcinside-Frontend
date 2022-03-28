import React from 'react';
import * as S from './Style';
import * as I from '../../Assets/index';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {
    const router = useRouter();
    return (
        <div css={S.Positioner}>
            <div css={S.LogoWrapper}><I.Logo /></div>
            <div css={S.SidebarListWrapper}>
                <Link href="/HomePage/Home"><a css={{ backgroundColor: router.pathname === "/HomePage/Home" ? '#5A66FF' : '' }}><I.Home/>Home</a></Link>
                <Link href="/Top20"><a css={{ backgroundColor: router.pathname === "/Top20" ? '#5A66FF' : '' }}><I.Top20/>Top 20</a></Link>
                <Link href="/Setting"><a css={{ backgroundColor: router.pathname === "/Setting" ? '#5A66FF' : '' }}><I.Setting/>Setting</a></Link>
            </div>
        </div>
    )
}

export default SideBar;