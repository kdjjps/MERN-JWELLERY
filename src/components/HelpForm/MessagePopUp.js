import React from 'react'
import { PopUpModalBox } from './style'

export default function MessagePopUp({status}) {
    return (
        <PopUpModalBox status={status}>
            Query Sent!
        </PopUpModalBox>
    )
}
