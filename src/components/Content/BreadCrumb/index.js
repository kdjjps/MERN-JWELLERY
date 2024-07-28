import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import BreadCrumbBox from './style'

export default function BreadCrumb({crumbsArray}) {
    const {url} = useRouteMatch()

    return (
        <BreadCrumbBox>
            <div>Home</div>
            {crumbsArray.map((crumb, index) => {
                if (index >  0){
                    return (
                        <div style={{display:'flex'}} key={index}>
                            <span style={{margin:'0px 3px'}}>/</span>
                            <div>{crumb}</div>
                        </div>
                    )
                }
            })}
        </BreadCrumbBox>
    )
}