import React from 'react'
import HamburgerBox from './style.js'

export default function Hamburger({onHamburgerClick, slideStatus}) {
    return (
        <HamburgerBox onClick={onHamburgerClick} status={slideStatus} >
            <div></div>
            <div></div>
            <div></div>
        </HamburgerBox>
    )
}