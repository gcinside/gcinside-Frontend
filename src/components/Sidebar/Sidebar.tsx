import React from 'react';
import * as S from './Style';
import * as I from '../../Assets/index';
import Link from 'next/link';

const SideBar = () => {
    return (
        <div css={S.Positioner}>
            <div css={S.LogoWrapper}><I.Logo /></div>
            <div css={S.SidebarListWrapper}>
                <Link href="/Home"><a><I.Home/>Home</a></Link>
                <Link href="/Top20"><a><I.Top20/>Top 20</a></Link>
                <Link href="/Setting"><a><I.Setting/>Setting</a></Link>
            </div>
        </div>
    )
}

export default SideBar;