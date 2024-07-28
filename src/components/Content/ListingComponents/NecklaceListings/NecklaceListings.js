import React,{useState, useEffect, useRef} from 'react'
import NecklaceItem from './NecklaceItem'
import NecklaceFilters from './NecklaceFilters'
import  {ListingsBox} from '../style.js'
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import queryString from 'query-string'
import { useSelector } from "react-redux"
import { useCookies } from 'react-cookie'
import { getSearchQueryFilteredProducts } from '../../../../store/actions/jewelryActions'
import Loader from '../../Loader/Loader'

export default function NecklaceListings({isMasterAllSet, children}) {

    const data = useSelector(state => state)
    const necklaces = data.jewelryReducer.unfilteredSolitaireNecklacesArray
    
    const [cookies] = useCookies()
    const history = useHistory()
    const { url } = useRouteMatch();
    const {search} = useLocation()
    const filter = queryString.parse(search)

    const loader = useRef(null)

    const filteredNecklaces = getSearchQueryFilteredProducts("necklace", necklaces, filter);

    const [shape, setShape] = useState('')
    const [parentMetalColor, setParentMetalColor] = useState('white-gold')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(12)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const [currentPosts, setCurrentPosts] = useState([])

    useEffect(() => {
        if (cookies.whatGotSelectedFirstForCustomNecklace === 'diamond'){
          history.push(`/create-your-own-necklace/necklaces?shape=${cookies._diamondShapeSelectedForCustomNecklace}`)
        }
      },[])

    useEffect(() => {
        var options = {
           root: null,
           rootMargin: "20px",
           threshold: 1.0
        };
       // initialize IntersectionObserver
       // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
           observer.observe(loader.current)
        }

   }, [isMasterAllSet]);

   const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setCurrentPage(prevPage =>  prevPage + 1)
        }
    }

    useEffect(() => {
        setCurrentPage(1)
        setCurrentPosts([...filteredNecklaces.slice(indexOfFirstPost, indexOfLastPost)])
   },[shape, isMasterAllSet])

    useEffect(() => {
        setCurrentPosts([...currentPosts, ...filteredNecklaces.slice(indexOfFirstPost, indexOfLastPost)])
    },[currentPage])

    const products = filteredNecklaces.map((item,index)=>{
        return(
            <NecklaceItem  item={item} key={index} parentMetalColor={parentMetalColor}/>
        )
    })

    return (
        isMasterAllSet

        ?

        <ListingsBox>
            <NecklaceFilters setParentMetalColor={setParentMetalColor} setShape={setShape} />
            <div className="listings-functions-container">
                <h2>{filteredNecklaces.length} Necklaces found</h2>
                <select>
                    <option value="0">Sort By: </option>
                    <option value="0">Price: Low to High </option>
                    <option value="0">Price: High to Low </option>
                </select>
            </div>
            <section>
                {
                    filteredNecklaces.length === 0 

                    ?

                    <div className="reset-filter-message">
                        We found no necklace that match your criteria. <br/> Please expand your search or <a href={`${url}`}>reset your filters</a>
                    </div>

                    :

                    <div className="result-container">
                        {children}
                        {products}
                    </div>
                }
            </section>
            {
                currentPage > Math.floor(filteredNecklaces.length/postsPerPage)

                ?

                <div className='see-more-button' style={{fontSize:'2.0rem'}}>
                    --- End of Listing ---
                </div>

                :

                <div className='see-more-button' style={{marginTop:'150px'}} ref={loader}>
                    Loading More.. {currentPage} {Math.floor(filteredNecklaces.length/postsPerPage)}
                </div>
            }
        </ListingsBox>

        :

        <Loader/>
    )
}