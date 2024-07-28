import React from 'react'
import {PopUpModalBox} from './style'

export default function RemovedItemPopup({status}) {
    return (
        <PopUpModalBox status={status}>
            Item Removed From Wishlist
        </PopUpModalBox>
    )
}
