import React from 'react'
import {SocialSharingBox} from './style'
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    TelegramIcon
  } from "react-share";

export default function SocialSharing() {
    return (
        <SocialSharingBox>
            <div className='social-button-container'>
                <FacebookShareButton url={window.location.href}>
                    <FacebookIcon size={30} />
                </FacebookShareButton>
            </div>
            <div className='social-button-container'>
                <WhatsappShareButton url={window.location.href}>
                    <WhatsappIcon size={30} />
                </WhatsappShareButton>
            </div>
            <div className='social-button-container'>
                <TwitterShareButton url={window.location.href}>
                    <TwitterIcon size={30} />
                </TwitterShareButton>
            </div>
            <div className='social-button-container'>
                <TelegramShareButton url={window.location.href}>
                    <TelegramIcon size={30} />
                </TelegramShareButton>
            </div>
        </SocialSharingBox>
    )
}
