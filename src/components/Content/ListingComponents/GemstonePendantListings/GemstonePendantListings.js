import React, {useState, useEffect} from 'react'
import { ListingsBox } from '../style'
import GemstonePendantItem from '../GemstonePendantListings/GemstonePendantItem'
import queryString from 'query-string'
import {useLocation, useHistory} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import GemstonePendantFilters from './GemstonePendantFilters'
import { useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'
import { getFilteredGemRings } from '../../../../store/actions/jewelryActions'

export default function GemstonePendantLisitings(props) {

    const data = useSelector(state => state)

    const {search} = useLocation()
    const filter = queryString.parse(search)
    const [cookies, setCookie] = useCookies()
    const history = useHistory()
    const [gem, setGem] = useState('all')

    const allGemstones = data.jewelryReducer.unfilteredGemstonesArray

    const filteredPendants = getFilteredGemRings(data.jewelryReducer.unfilteredGemstonesPendantsArray, filter)
        
    const pendants = filteredPendants.map((item, index) => {
    return <GemstonePendantItem item={item} pendantNo={index} key={index} />;
    })

    useEffect(() => {
      const fetchProducts = async () => {
          if (cookies.whatGotSelectedFirstForCustomGemPendant === 'gem'){
          let stockNumber = cookies._gemstoneSelectedForCustomGemPendant.stockNumber
          
          let gemObject = allGemstones.find((object, index) => {
              return object.stockNumber === stockNumber
          })

          if(gemObject){                
              let gem = gemObject.gemDetails.gemName
              setGem(gem)
              history.push(`/create-your-own-gem-pendant/pendants?gem=${gem}`)

          }
      }
        }
        fetchProducts()
      
    },[allGemstones, gem])


    return (
        props.isMasterAllSet

        ?

        <ListingsBox>
          <GemstonePendantFilters setGem={setGem} />
         <section id="gemstone-result-container">
            {props.children}
            {pendants}
          </section>
        </ListingsBox>

        :

        <Loader/>
    )
}
