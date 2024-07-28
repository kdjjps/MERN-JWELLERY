import React from 'react'
import { PopUpModalBox } from './style'

export default function SignUpPopUp({status}) {
    return (
        <PopUpModalBox status={status}>
            Signed Up Successfully!
        </PopUpModalBox>
    )
}
