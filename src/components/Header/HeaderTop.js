import React from 'react'
import {HeaderTopBox} from './style.js'
import RightSideIcons from './RightSideIcons'
import Logo from './Logo'
import Search from './Search'
import Hamburger from '../Hamburger/Hamburger'

export default function HeaderTop({onAccountClick, status, onHamburgerClick, isUserAuthorized}) {
    return (
        <HeaderTopBox>
            <section style={{fontSize:'1.6rem'}}>
                <Search />
                <Hamburger onHamburgerClick={onHamburgerClick} />
            </section>
            <section >
                <Logo />
            </section>
            <section >
                <RightSideIcons onAccountClick={onAccountClick} status={status} isUserAuthorized={isUserAuthorized} />
            </section>
        </HeaderTopBox>
    )
}