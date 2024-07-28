import React from 'react'
import {SearchGridItemBox} from './style'
import getImage from '../../helper/getImage'

export default function SearchGridItem({item}) {
    console.log(item)
    return (
        <SearchGridItemBox>
            {
                item.category === 'loose-diamond'

                ?

                <img 
                src={(item.image.length)>5 ? item.image : getImage(item.shape).imgURL}
                onError={(e)=>{e.target.onerror = null; e.target.src = getImage(item.shape).imgURL}}
                style={{width:'100%'}} alt='diamond'/>

                :


                <img src={`${item.image}`} alt='jewelry-item' />

            }

            <p>{item.keywords}</p>
        </SearchGridItemBox>
    )
}