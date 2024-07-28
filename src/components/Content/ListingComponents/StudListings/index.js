import React,{useState, useRef} from 'react'
import {ListingPageBox} from '../style'
import StudListings from './StudListings'
import StudDetails from './StudDetails'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import ViewOnEar from '../../ViewOnEar'
import {useCookies} from 'react-cookie'

export default function StudPage({isMasterAllSet}) {  
    let {path} = useRouteMatch()
    const slider = useRef(null)
    const [cookies, setCookie] = useCookies()
    const [isAllSet, setIsAllSet] = useState(false)
    const [stoneNumber, setStoneNumber] = useState(0)
    const [viewOnHandStatus, setViewOnHandStatus] = useState(false)

    const handleViewHandModal = (stoneName, slider) =>{
        if (viewOnHandStatus === false) {
          
          switch(stoneName) {
            case "RD":
              setStoneNumber(0)
              slider.current.slickGoTo(0)
              break;
            case "EM":
              setStoneNumber(7)
              slider.current.slickGoTo(7)
              break;
            case "PS":
              setStoneNumber(3)
              slider.current.slickGoTo(3)
              break;
            case "CMB":
              setStoneNumber(8)
              slider.current.slickGoTo(8)
              break;
            case "MQ":
              setStoneNumber(5)
              slider.current.slickGoTo(5)
              break;
            case "HT":
              setStoneNumber(6)
              slider.current.slickGoTo(6)
              break;
            case "SE":
              setStoneNumber(9)
              slider.current.slickGoTo(9)
              break;
            case "LR":
              setStoneNumber(1)
              slider.current.slickGoTo(1)
              break;
            case "PR":
              setStoneNumber(2)
              slider.current.slickGoTo(2)
              break;
            case "OV":
              setStoneNumber(4)
              slider.current.slickGoTo(4)
              break;
            default:
              setStoneNumber(0)
              break;
            }
  
          setViewOnHandStatus(true)
          document.body.setAttribute('style', `position: fixed; top: ${window.scrollY}; left: 0; background: rgba(0,0,0,0.5) `)
        }
        else{
          setViewOnHandStatus(false)
          document.body.setAttribute('style', '')
          window.scrollTo(0, window.scrollY)
        }
    }

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}`} render={(props) => (
                      <StudListings 
                      {...props}
                      isMasterAllSet={isMasterAllSet}
                      />
                    )} />
                    <Route path={`${path}/:studId`} render={(props) => (
                      <StudDetails 
                        {...props}
                        slider={slider} stoneNumber={stoneNumber} setStoneNumber={setStoneNumber}
                      />
                    )} />
                </Switch>
            </ListingPageBox>            
    )
}