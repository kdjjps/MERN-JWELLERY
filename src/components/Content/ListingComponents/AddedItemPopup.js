import React from 'react'
import {PopUpModalBox} from './style'

export default function PopupModal({status}) {
    return (
        <PopUpModalBox status={status}>
            Item Added To Wishlist
        </PopUpModalBox>
    )
}
