import React,{useEffect} from 'react'
import LoaderBox from './style'

export default function Loader({status}) {

    useEffect(()=>{
        if (status === true) {
            document.body.setAttribute('style', `position: fixed; top: ${window.scrollY}; left: 0; right: 0; `)
          }
          else{
            document.body.setAttribute('style', '')
            window.scrollTo(0, window.scrollY)
          }
    })

    return (
       <LoaderBox status={status}>
           <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 70 70">
                <g>
                    <path fill="#E8422C" d="M10,15h50l10,10l-35,30l-35,-30z"/>
                    <path className="t1" d="M0,25h14l-4,-10z"/>
                    <path className="t2" d="M10,15h11l-7,10z"/>
                    <path className="t3" d="M14,25h14l-7,-10z"/>
                    <path className="t4" d="M21,15h14l-7,10z"/>
                    <path className="t5" d="M28,25h14l-7,-10z"/>
                    <path className="t6" d="M35,15h14l-7,10z"/>
                    <path className="t7" d="M42,25h14l-7,-10z"/>
                    <path className="t8" d="M49,15h11l-4,10z"/>
                    <path className="t9" d="M56,25h14l-10,-10z"/>
                    <path className="b1" d="M0,25h14l21,30z"/>
                    <path className="b2" d="M14,25h14l7,30z"/>
                    <path className="b3" d="M28,25h14l-7,30z"/>
                    <path className="b4" d="M42,25h14l-21,30z"/>
                    <path className="b5" d="M56,25h14l-35,30z"/>
                    <path className="overlay" d="M10,15h50l10,10l-35,30l-35,-30z"/>
                </g>
            </svg>

       </LoaderBox>
            
    )
}