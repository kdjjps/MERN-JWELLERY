import React,{ useEffect, useState } from 'react'
import { ListingsBox } from '../style'
import GemstoneRingItem from './GemstoneRingItem'
import queryString from 'query-string'
import {useLocation, useHistory} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import GemstoneRingFilters from './GemstoneRingFilters'
import { useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getFilteredGemRings } from '../../../../store/actions/jewelryActions'

export default function GemstoneRingLisitings(props) {

    const data = useSelector(state => state)

    const {search} = useLocation()
    const filter = queryString.parse(search)
    const [cookies] = useCookies()
    const history = useHistory()
    const [gem, setGem] = useState('all')

    const allGemstones = data.jewelryReducer.unfilteredGemstonesArray

    const filteredRings = getFilteredGemRings(data.jewelryReducer.unfilteredGemstonesRingsArray, filter)
    
    const rings = filteredRings.map((item, index) => {
    return <GemstoneRingItem item={item} ringNo={index} key={index} />;
    })

    useEffect(() => {
        const fetchProducts = async () => {
            if (cookies.whatGotSelectedFirstForCustomGemRing === 'gem'){
            let stockNumber = cookies._gemstoneSelectedForCustomGemRing.stockNumber
            
            let gemObject = allGemstones.find((object, index) => {
                return object.stockNumber === stockNumber
            })

            if(gemObject){                
                let gem = gemObject.gemDetails.gemName
                setGem(gem)
                history.push(`/create-your-own-gem-ring/rings?gem=${gem}`)

            }
        }
          }
          fetchProducts()
        
    },[allGemstones, gem])

    return (
        props.isMasterAllSet

        ?

        <ListingsBox>
          <GemstoneRingFilters gem={gem} setGem={setGem} />
          <section id="gemstone-result-container">
              {props.children}
              {rings}
          </section>
        </ListingsBox>

        :

        <Loader/>
    )
}