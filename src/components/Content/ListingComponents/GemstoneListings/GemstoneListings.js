import React,{useEffect} from 'react'
import GemstoneShortInfo from './GemstoneShortInfo'
import GemstoneItem from './GemstoneItem'
import GemstoneInfo from './GemstoneInfo'
import {ListingsBox} from '../style.js'
import queryString from 'query-string'
import {useParams, useLocation, useHistory, useRouteMatch} from 'react-router-dom'
import gemstoneTableData from '../../../../fakedata/gemstoneTableData'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import _ from 'lodash'
import Loader from '../../Loader/Loader'

export default function GemstoneListings(props){

    const data = useSelector(state => state)
    
    const {path} = useRouteMatch()
    const {search} = useLocation()
    const location = useLocation()
    const history = useHistory()
    const {gemstone} = useParams()
    const filter = queryString.parse(search)
    const [cookies, setCookie] = useCookies()

    const urlStringArray = window.location.pathname.split("/")

    const gemstoneSearchedFor = urlStringArray[urlStringArray.length - 1]

    const getFilteredGemstones = (listings, name, filter) => {
        
        let {sortBy} = filter

        let result = listings

        result = result.filter((item,index)=> item.gemDetails.gemName === name)

        if (sortBy) {
            switch (sortBy) {
              case 'asc':
                result =  _.orderBy(result, o => +o.pricePerCarat, ['asc'])
                break;
              case 'desc':
                result =  _.orderBy(result, o => +o.pricePerCarat, ['desc'])
                break;
              default:
                return result
            }
          }

        return result
    }

    const filteredData = getFilteredGemstones(data.jewelryReducer.unfilteredGemstonesArray, gemstone, filter)

    const sortGemstones = (sortType) => {
        const parsed = queryString.parse(location.search)
        parsed.sortBy = sortType
        const stringified = queryString.stringify(parsed)
        location.search = stringified
        history.push(`?${location.search}`)
    }

    const products = filteredData.map((item,index)=>{
                        return(
                            <GemstoneItem item={item} key={index} />
                        )
                    })

    const filteredStoneForTableData = gemstoneTableData.find((item,index)=>{
                            return(
                                item.gemstone === gemstone
                            )
                    }) 

    useEffect(()=> {

        if (path === '/create-your-own-gem-ring/gemstones/:gemstone'){
            let gemstoneDefinedForRing = cookies._gemstoneTypeForCustomGemRing

            if (gemstoneDefinedForRing){
                if (gemstoneDefinedForRing != gemstoneSearchedFor){
                    window.location = `/create-your-own-gem-ring/gemstones/${gemstoneDefinedForRing}`
                }
            }
        }
        else if (path === '/create-your-own-gem-pendant/gemstones/:gemstone'){
            let gemstoneDefinedForPendant = cookies._gemstoneTypeForCustomGemPendant

            if (gemstoneDefinedForPendant){
                if (gemstoneDefinedForPendant != gemstoneSearchedFor){
                    window.location = `/create-your-own-gem-ring/gemstones/${gemstoneDefinedForPendant}`
                }
            }
        }
       
    },[])
    
    return (
        props.isAllSet

        ?
        
        <ListingsBox>
            <GemstoneShortInfo />
            <GemstoneInfo filteredStoneForTableData={filteredStoneForTableData} />
            {/* <GemstoneFilters /> */}
            <div className="listings-functions-container">
                <h2>{filteredData.length} Gemstones found</h2>
                <select onChange={(e) => sortGemstones(e.target.value)}> 
                    <option value='0'>Sort By: </option>
                    <option value='asc'>Price: Low to High </option>
                    <option value='desc'>Price: High to Low </option>
                </select>
            </div>
            <section id="gemstone-result-container">
                    {props.children}
                    {products}
            </section>
        </ListingsBox>

        :

        <Loader/>
    )
}