import React,{useState, useContext} from 'react'
import {PresetDetailsBox} from './style'
import AlloyModal from './AlloyModal'
import {useCookies} from 'react-cookie'
import {RingsContext} from '../../../contexts/RingsContext'
import {DiamondsContext} from '../../../contexts/DiamondsContext'

export default function ConfirmOrder() {
    // const [cookies, setCookie] = useCookies("")

    // const {rings} = useContext(RingsContext)
    // const {allDiamonds} = useContext(DiamondsContext)

    // const [alloyModalStatus, setAlloyModalStatus] = useState(false)
    // const [caratModalStatus, setCaratModalStatus] = useState(false)
    // const [qualityModalStatus, setQualityModalStatus] = useState(false)
    // const [sizeModalStatus, setSizeModalStatus] = useState(false)
    // const [transparentLayerStatus, setTransparentLayerStatus] = useState(false)

    // const diamond = allDiamonds.find((item, index) => {
    //     return item.stockNumber === cookies._diamondSelectedForRing
    // }) 
    
    // const ring = rings.find((ring, index) => {
    //     let ringId = cookies._ringSelected.slice(0,10)
    //     return ring.stockNumber === ringId
    // })

    // const ringMetalCode = cookies._ringSelected[10]

    // const getAlloyModal = () => {
    //     setAlloyModalStatus(!alloyModalStatus)
    //     setTransparentLayerStatus(!transparentLayerStatus)
    // }

    // const getCaratModal = () => {
    //     setCaratModalStatus(!caratModalStatus)
    //     setTransparentLayerStatus(!transparentLayerStatus)
    // }

    // const getQualityModal = () => {
    //     setQualityModalStatus(!qualityModalStatus)
    //     setTransparentLayerStatus(!transparentLayerStatus)
    // }

    // const getSizeModal = () => {
    //     setSizeModalStatus(!sizeModalStatus)
    //     setTransparentLayerStatus(!transparentLayerStatus)
    // }

    return  (
        // diamond

        // ?

        // <PresetDetailsBox status={transparentLayerStatus}>
        //     <div className="data-holder">
        //         <img src={ring.metals[ringMetalCode].imgURL} />
        //     </div>
        //     <div className="data-holder">
        //         <section>
        //             <h2>{diamond.WEIGHT} carat solitaire ring in white gold with {diamond.SHAPE} diamond</h2>
        //             <div>
        //                 <p className="detail-label">Alloy</p>
        //                 <p className="detail-text">18 K {}</p>
        //                 <button onClick={getAlloyModal}>Modify</button>
        //             </div>
        //             <div>
        //                 <p className="detail-label">Carat Weight</p>
        //                 <p className="detail-text">{diamond.WEIGHT}</p>
        //                 <button onClick={getCaratModal}>Modify</button>
        //             </div>
        //             <div>
        //                 <p className="detail-label">Diamond Quality</p>
        //                 <p className="detail-text">{diamond.CLARITY}</p>
        //                 <button onClick={getQualityModal}>Modify</button>
        //             </div>
        //             <div>
        //                 <p className="detail-label">Ring Size</p>
        //                 <p className="detail-text">52</p>
        //                 <button onClick={getSizeModal}>Modify</button>
        //             </div>
        //             <div className="buttons-container">
        //                 <button>Add To Cart</button>
        //             </div>
        //         </section>

        //     </div>
        //     <AlloyModal status={alloyModalStatus} modalChange={getAlloyModal} />
        // </PresetDetailsBox>

        // :

        // <div>
        //     Loading...
        // </div>

        <div> Confirm Order Page</div>
    )
    
}