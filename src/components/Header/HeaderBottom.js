import React, { useEffect, useState } from 'react';
import {HeaderBottomBox} from './style.js'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default function HeaderBottom() {
    const [scrolledPixels, setScrolledPixels] = useState(0)

    const listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        setScrolledPixels(scrolled)
      }

      useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    
        return () => {
          window.removeEventListener('scroll', () => listenToScroll);
        };
      }, []);

    return (
       <HeaderBottomBox pixels={scrolledPixels} >
                <Navbar />
       </HeaderBottomBox>
    )
}
