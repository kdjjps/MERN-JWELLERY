import React from 'react'
import { PopUpModalBox } from './style'

export default function SignInPopUp({status}) {
    return (
        <PopUpModalBox status={status}>
            Signed In Successfully!
        </PopUpModalBox>
    )
}
