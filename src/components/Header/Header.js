import React,{useState, useEffect} from 'react'
import {HeaderBox, StickyHeaderBox} from './style.js'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

export default function Header({onAccountClick, currencyWindowStatus, onHamburgerClick, stickyStatus, isUserAuthorized}) {

    return (
        <HeaderBox stickyStatus={stickyStatus}>
            <HeaderTop onAccountClick={onAccountClick} status={currencyWindowStatus} onHamburgerClick={onHamburgerClick} isUserAuthorized={isUserAuthorized} />
            <HeaderBottom />
        </HeaderBox>
    )
}