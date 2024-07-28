// import React, {useState, useEffect} from 'react'
// import { WishlistItemBox } from './style'
// import {useCookies} from 'react-cookie'
// import { useDispatch } from 'react-redux'

// const WishlistItem = ({
//     unfilteredDiamondArray,
//     findDiamond,
//     product,
//     unfilteredSolitaireRingsArray,
//     unfilteredSolitaireNecklacesArray,
//     unfilteredSolitaireStudsArray,
//     unfilteredFashionRingsArray,
//     unfilteredDiamondPendantsArray,
//     unfilteredDiamondEarringsArray,
//     unfilteredAlphabetPendantsArray,
//     unfilteredGemstonesArray,
//     unfilteredGemstonesRingsArray,
//     unfilteredGemstonesPendantsArray,
//     unfilteredMensBraceletsArray,
//     unfilteredMensStudsArray,
//     unfilteredMensChainsArray,
//     unfilteredMensKadasArray,
//     unfilteredMensRingsArray,
//     unfilteredNosePinsArray,
//     findJewelry,
//     nfObject,
//     isAllSet,
//     removeFromWishlist
//     }) => {

//     const dispatch = useDispatch()

//     const [cookies, setCookie] = useCookies()
//     const [stoneDisplayStatus, setStoneDisplayStatus] = useState(true)
//     const [jewelryDisplayStatus, setJewelryDisplayStatus] = useState(false)
//     const [isObjectEmpty, setIsObjectEmpty] = useState(false)

//     const [wishlistObject, setWishlistObject] = useState({
//         diamond: {},
//         fashionRing: {},
//         diamondPendant: {},
//         diamondEarring: {},
//         alphabetPendant: {},
//         nosePin: {},
//         mensRing: {},
//         mensChain: {},
//         mensKada: {},
//         mensBracelet: {},
//         mensStud: {},
//         gemstone: {},
//         gemRing: {},
//         gemPendant: {},
//         customRing: {},
//         customNecklace: {},
//         customStud: {},
//         solitaireRing: {},
//         presetNecklace: {},
//         presetStud: {},
//         firstStudDiamond: {},
//         secondStudDiamond: {}
//       })

//     const getSampleDiamondImage = (shape) => {
//         switch(shape){
//             case "heart":
//                 return {
//                      shape: "Heart",
//                      imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/heart.jpg"
//                        }
//                 break
//             case "radiant":
//                 return {
//                     shape: "Radiant",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/radiant.jpg"
//                    }
//                 break
//             case "emerald":
//                 return {
//                     shape: "Emerald",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/emerald.jpg"
//                    }
//                 break
//             case "round":
//                 return {
//                     shape: "Round",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                    }
//                 break
//             case "pear":
//                 return {
//                     shape: "Pear",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/pear.jpg"
//                    }
//                 break
//             case "cushion":
//                 return {
//                     shape: "Cushion",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/cushion.jpg"
//                    }
//                 break
//             case "asscher":
//                 return {
//                     shape: "Square Emerald",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/asscher.jpg"
//                    }
//                 break
//             case "princess":
//                 return {
//                     shape: "Princess",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/princess.jpg"
//                    }
//                     break
//             case 'oval':
//                 return {
//                     shape: "Oval",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/oval.jpg"
//                    }
//                 break
//             case "marquise":
//                 return {
//                     shape: "Marquise",
//                     imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/marquise.jpg"
//                    }
//                 break
//         }
//     }

//     const remove = (product) => {
//         dispatch(removeFromWishlist(product))
//     }

//     // const diamond = findDiamond(unfilteredDiamondArray, product.stockNumber)
//     // const fashionRing = findJewelry(unfilteredSolitaireRingsArray, product.stockNumber)
//     // const presetNecklace = findJewelry(unfilteredSolitaireNecklacesArray, product.stockNumber)
//     // const presetStud = findJewelry(unfilteredSolitaireStudsArray, product.stockNumber)
//     // const firstStudDiamond = findDiamond(unfilteredDiamondArray, product.stockNumber)
//     // const secondStudDiamond = findDiamond(unfilteredDiamondArray, product.stockNumber)
//     // const mensRing = findJewelry(unfilteredMensRingsArray, product.stockNumber)
//     // const mensKada = findJewelry(unfilteredMensKadasArray, product.stockNumber)
//     // const mensChain = findJewelry(unfilteredMensChainsArray, product.stockNumber)
//     // const mensBracelet = findJewelry(unfilteredMensBraceletsArray, product.stockNumber)
//     // const fashionRing = findJewelry(unfilteredDiamondEarringsArray, product.stockNumber)
//     // const diamondPendant = findJewelry(unfilteredDiamondPendantsArray, product.stockNumber)
//     // const alphabetPendant = findJewelry(unfilteredAlphabetPendantsArray, product.stockNumber)
//     // const fashionRing = findJewelry(unfilteredFashionRingsArray, product.stockNumber)
//     // const nosePin = findJewelry(unfilteredNosePinsArray, product.stockNumber)
//     // const gemstone = findJewelry(unfilteredGemstonesArray, product.stockNumber)
//     // const gemstoneObject = {}
//     // const gemstoneRingObject = {}
//     // const gemstonePendantObject = {}
//     // const remove = () => {
//     //     console.log('Hello')
//     // }

//     useEffect(() => {
//         ( async () => {
//            switch(product.itemType){
//                case 'loose-diamond':
//                   let foundDiamondObject = await findDiamond(unfilteredDiamondArray, product.stockNumber)
//                   setWishlistObject({ ...wishlistObject, diamond: {...foundDiamondObject}})
//                   setIsObjectEmpty(foundDiamondObject ? !(Object.keys(foundDiamondObject).length === 0 && foundDiamondObject.constructor === Object) : false)
//                 break;
//                case 'solitaire-ring':
//                   let foundSolitaireRing = await findJewelry(unfilteredSolitaireRingsArray, product.stockNumber)
//                   setWishlistObject({ ...wishlistObject, solitaireRing: {...foundSolitaireRing}})
//                   setIsObjectEmpty(foundSolitaireRing ? !(Object.keys(foundSolitaireRing).length === 0 && foundSolitaireRing.constructor === Object) : false)
//                 break;
//                case 'preset-necklace':
//                   let foundSolitaireNecklace = await findJewelry(unfilteredSolitaireNecklacesArray, product.stockNumber)
//                   setWishlistObject({ ...wishlistObject, presetNecklace: {...foundSolitaireNecklace}})
//                   setIsObjectEmpty(foundSolitaireNecklace ? !(Object.keys(foundSolitaireNecklace).length === 0 && foundSolitaireNecklace.constructor === Object) : false)
//                 break;
//                case 'preset-stud':
//                   let foundSolitaireStud = await findJewelry(unfilteredSolitaireStudsArray, product.stockNumber)
//                   setWishlistObject({ ...wishlistObject, presetStud: {...foundSolitaireStud}})
//                   setIsObjectEmpty(foundSolitaireStud ? !(Object.keys(foundSolitaireStud).length === 0 && foundSolitaireStud.constructor === Object) : false)
//                 break;
//                case 'fashion-ring':
//                   let foundFashionRingObject = await findJewelry(unfilteredFashionRingsArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, fashionRing: {...foundFashionRingObject}})
//                   setIsObjectEmpty(foundFashionRingObject ? !(Object.keys(foundFashionRingObject).length === 0 && foundFashionRingObject.constructor === Object) : false)
//                 break;
//                case 'diamond-pendant':
//                   let foundPendant = await findJewelry(unfilteredDiamondPendantsArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, diamondPendant: {...foundPendant}})
//                   setIsObjectEmpty(foundPendant ? !(Object.keys(foundPendant).length === 0 && foundPendant.constructor === Object) : false)
//                 break;
//                case 'alphabet-pendant':
//                   let foundAlphabetPendant = await findJewelry(unfilteredAlphabetPendantsArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, alphabetPendant: {...foundAlphabetPendant}})
//                   setIsObjectEmpty(foundAlphabetPendant ? !(Object.keys(foundAlphabetPendant).length === 0 && foundAlphabetPendant.constructor === Object) : false)
//                 break;
//                case 'diamond-earring':
//                   let foundDiamondEarring = await findJewelry(unfilteredDiamondEarringsArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, diamondEarring: {...foundDiamondEarring}})
//                   setIsObjectEmpty(foundDiamondEarring ? !(Object.keys(foundDiamondEarring).length === 0 && foundDiamondEarring.constructor === Object) : false)
//                 break;
//                case 'nose-pin':
//                   let foundNosePin = await findJewelry(unfilteredNosePinsArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, nosePin: {...foundNosePin}})
//                   setIsObjectEmpty(foundNosePin ? !(Object.keys(foundNosePin).length === 0 && foundNosePin.constructor === Object) : false)
//                 break;
//                case 'mens-ring':
//                   let foundMensRing = await findJewelry(unfilteredMensRingsArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, mensRing: {...foundMensRing}})
//                   setIsObjectEmpty(foundMensRing ? !(Object.keys(foundMensRing).length === 0 && foundMensRing.constructor === Object) : false)
//                 break;
//                case 'gold-chain':
//                   let foundMensChain = await findJewelry(unfilteredMensChainsArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, mensChain: {...foundMensChain}})
//                   setIsObjectEmpty(foundMensChain ? !(Object.keys(foundMensChain).length === 0 && foundMensChain.constructor === Object) : false)
//                 break;
//                case 'mens-kada':
//                   let foundMensKada = await findJewelry(unfilteredMensKadasArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, mensKada: {...foundMensKada}})
//                   setIsObjectEmpty(foundMensKada ? !(Object.keys(foundMensKada).length === 0 && foundMensKada.constructor === Object) : false)
//                 break;
//                case 'mens-bracelet':
//                   let foundMensBracelet = await findJewelry(unfilteredMensBraceletsArray, product.stockNumber)
//                   setWishlistObject({...wishlistObject, mensBracelet: {...foundMensBracelet}})
//                   setIsObjectEmpty(foundMensBracelet ? !(Object.keys(foundMensBracelet).length === 0 && foundMensBracelet.constructor === Object) : false)
//                 break;
//                case 'mens-stud':
//                   let foundMensStud = await findJewelry(unfilteredSolitaireStudsArray, product.stockNumber)
//                   setWishlistObject({ ...wishlistObject, mensStud: {...foundMensStud}})
//                   setIsObjectEmpty(foundMensStud ? !(Object.keys(foundMensStud).length === 0 && foundMensStud.constructor === Object) : false)
//                 break;
//                case 'loose-gemstone':
//                  let foundLooseGemstone = await findJewelry(unfilteredGemstonesArray, product.stockNumber)
//                  setWishlistObject({...wishlistObject, gemstone: {...foundLooseGemstone}})
//                  setIsObjectEmpty(foundLooseGemstone ? !(Object.keys(foundLooseGemstone).length === 0 && foundLooseGemstone.constructor === Object) : false)
//                 break;
//                case 'gem-ring':
//                  let foundGemRing = await findJewelry(unfilteredGemstonesRingsArray, product.stockNumber)
//                  setWishlistObject({...wishlistObject, gemRing: {...foundGemRing}})
//                  setIsObjectEmpty(foundGemRing ? !(Object.keys(foundGemRing).length === 0 && foundGemRing.constructor === Object) : false)
//                 break;
//                case 'gem-pendant':
//                  let foundGemPendant = await findJewelry(unfilteredGemstonesPendantsArray, product.stockNumber)
//                  setWishlistObject({...wishlistObject, gemPendant: {...foundGemPendant}})
//                  setIsObjectEmpty(foundGemPendant ? !(Object.keys(foundGemPendant).length === 0 && foundGemPendant.constructor === Object) : false)
//                 break;
//                default:
//                 return
//            }
//         })()
//     },[isAllSet])

//     return (
//         <WishlistItemBox jewelryImageStatus={jewelryDisplayStatus} stoneImageStatus={stoneDisplayStatus}>

//            { product.itemType === 'loose-diamond'

//             ?
//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Loose Diamond</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                         {
//                             !isAllSet

//                             ?

//                             <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                             :

//                             isObjectEmpty

//                             ?

//                             <div className='item-holder'>
//                                 <div className='image-holder' >
//                                     <img
//                                     src={(diamond.imageUrl.length)>5 ? diamond.imageUrl : getSampleDiamondImage(diamond.diamondShape).imgURL}
//                                     alt="diamond" id={product.stockNumber}
//                                     onError={(e)=>{e.target.onerror = null; e.target.src = getSampleDiamondImage(diamond.diamondShape).imgURL}} />
//                                 </div>
//                                 <div className='details-holder'>
//                                         <h2 >{diamond.carat} Carat {diamond.clarity} Clarity <br/> {getSampleDiamondImage(diamond.diamondShape).shape} Natural Diamond</h2>
//                                         {/* <p className='item-price'>Price: {cookies.currencyCode}  {getTotalPrice('loose-diamond', diamond, cookies)}</p> */}
//                                 </div>
//                             </div>

//                             :

//                             <div className='item-holder'>
//                                 <div className='image-holder' >
//                                     <img
//                                     src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                     alt="diamond"/>
//                                 </div>
//                                 <div className='details-holder'>
//                                     <h2>Diamond not available</h2>
//                                 </div>
//                             </div>
//                         }

//                 </div>

//             :

//                 product.itemType === 'solitaire-ring'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Preset Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(fashionRing.metals[product.metalCode].imgURL)}
//                                 alt="ring" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{fashionRing.metalWeight} Gms 18KT Gold {fashionRing.ringName} Ring</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('solitaire-ring', fashionRing, cookies, product.presetDiamondCarat, product.presetDiamondQuality)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Ring not available</h2>
//                             </div>
//                         </div>

//                     }

//                 </div>

//             :

//             product.itemType === 'preset-necklace'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Preset Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(presetNecklace.metals[product.metalCode].imgURL)}
//                                 alt="necklace" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{presetNecklace.metalWeight} Gms 18KT Gold {presetNecklace.necklaceName} Necklace</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('preset-necklace', presetNecklace, cookies, product.presetDiamondCarat, product.presetDiamondQuality)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Necklace not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//             :

//             product.itemType === 'mens-ring'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Mens Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(mensRing.imageUrl)}
//                                 alt="mens-ring" id={product.id}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{mensRing.metalWeight} Gms 18KT Gold {mensRing.ringName} Ring</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('mens-ring', mensRing, cookies, product.presetDiamondCarat, product.presetDiamondQuality, product.weightIndex)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Ring not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//             :

//             product.itemType === 'preset-stud'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Preset Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>

//                     {

//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                         <div className='image-holder' >
//                             <img
//                             src={(presetStud.metals[product.metalCode].imgURL)}
//                             alt="mens-ring" id={product.stockNumber}
//                             />
//                         </div>
//                         <div className='details-holder'>
//                             <h2 >{presetStud.metalWeight} Gms 18KT Gold {presetStud.studName} Stud</h2>
//                             {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('preset-stud', presetStud, cookies, product.presetDiamondCarat, product.presetDiamondQuality, null, product.studQuantity)} </p> */}
//                         </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Studs not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//         :

//         product.itemType === 'mens-stud'

//             ?

//             <div className='item'>
//                 <div className='item-top-bar'>
//                     <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Mens Jewelry</p>
//                     <div className='buttons-container'>
//                         {/* <p>
//                             View
//                         </p>
//                         <div className='seperator'>

//                         </div> */}
//                         <p onClick={() => remove(product)}>
//                             Remove
//                         </p>
//                     </div>
//                 </div>

//                 {

//                     !isAllSet

//                     ?

//                     <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                     :

//                     isObjectEmpty

//                     ?

//                     <div className='item-holder'>
//                     <div className='image-holder' >
//                         <img
//                         src={(presetStud.metals[product.metalCode].imgURL)}
//                         alt="mens-ring" id={product.stockNumber}
//                         />
//                     </div>
//                     <div className='details-holder'>
//                         <h2 >{presetStud.metalWeight} Gms 18KT Gold {presetStud.studName} Stud</h2>
//                         {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('preset-stud', presetStud, cookies, product.presetDiamondCarat, product.presetDiamondQuality, null, product.studQuantity)} </p> */}
//                     </div>
//                     </div>

//                     :

//                     <div className='item-holder'>
//                         <div className='image-holder' >
//                             <img
//                             src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                             alt="diamond"/>
//                         </div>
//                         <div className='details-holder'>
//                                 <h2>Studs not available</h2>
//                         </div>
//                     </div>
//                 }

//             </div>

//             :

//             product.itemType === 'mens-kada'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Mens Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(mensKada.imageUrl)}
//                                 alt="mens-kada" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{mensKada.weight} 18KT Gold {mensKada.kadaName}</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('mens-kada', mensKada, cookies, null, null, product.weightIndex)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Ring not available</h2>
//                             </div>
//                         </div>

//                     }

//                 </div>

//             :

//             product.itemType === 'gold-chain'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Mens Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(mensChain.imageUrl)}
//                                 alt="mens-kada" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{mensChain.weight} 22KT {mensChain.chainName}</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('gold-chain', mensChain, cookies, null, null, product.weightIndex)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Chain not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//             :

//             product.itemType === 'mens-bracelet'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Mens Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(mensBracelet.imageUrl)}
//                                 alt="mens-bracelet" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{mensBracelet.weight} 22KT {mensBracelet.braceletName}</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('mens-bracelet', mensBracelet, cookies, null, null, product.weightIndex)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Ring not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//                 :

//                 product.itemType === 'diamond-earring'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Women Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(diamondEarring.imageArray[0])}
//                                 alt="diamond-earring" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{diamondEarring.metalWeight} 22KT {diamondEarring.productName}</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('diamond-earring', product.weight, cookies, product.smallDiamondPrice, product.solitaireDiamondPrice)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Earring not available</h2>
//                             </div>
//                         </div>

//                     }

//                 </div>

//                 :

//                 product.itemType === 'diamond-pendant'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Women Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(diamondPendant.imageArray[0])}
//                                 alt="diamond-pendant" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{diamondPendant.metalWeight} 22KT {diamondPendant.productName}</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('diamond-pendant', product.weight, cookies, product.smallDiamondPrice, product.solitaireDiamondPrice)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Ring not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//                 :

//                 product.itemType === 'alphabet-pendant'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Women Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(alphabetPendant.image)}
//                                 alt="diamond-pendant" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{alphabetPendant.metalWeight} 22KT {alphabetPendant.productName}</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('alphabet-pendant', product.weight, cookies, product.smallDiamondPrice)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Pendant not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//                 :

//                 product.itemType === 'fashion-ring'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Women Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(fashionRing.imageArray[0])}
//                                 alt="fashion-ring" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{fashionRing.ringSizeWeightArray[product.weightIndex]} 22KT {fashionRing.productName}</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('fashion-ring', fashionRing.ringSizeWeightArray[product.weightIndex], cookies, product.smallDiamondPrice, product.solitaireDiamondPrice, fashionRing)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Ring not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//                 :

//                 product.itemType === 'nose-pin'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Women Jewelry</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src={(nosePin.imageArray[0])}
//                                 alt="nose-pin" id={product.stockNumber}
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{nosePin.metalWeight} 22KT {nosePin.productName}</h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('nose-pin', nosePin.metalWeight, cookies, product.smallDiamondPrice)} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Nose pin not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//             :

//             product.itemType === 'loose-gemstone'

//             ?

//             <div className='item'>
//                 <div className='item-top-bar'>
//                     <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Loose Gemstone</p>
//                     <div className='buttons-container'>
//                         {/* <p>
//                             View
//                         </p>
//                         <div className='seperator'>

//                         </div> */}
//                         <p onClick={() => remove(product)}>
//                             Remove
//                         </p>
//                     </div>
//                 </div>
//                 {
//                     !isAllSet

//                     ?

//                     <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                     :

//                     isObjectEmpty

//                     ?

//                     <div className='item-holder'>
//                         <div className='image-holder' >
//                             <img
//                             src={(gemstone.images[0])}
//                             alt="gemstone" id={product.stockNumber}
//                             />
//                         </div>
//                         <div className='details-holder'>
//                             <h2 >{gemstone.type}</h2>
//                             {/* <p className='item-price'>Price: {cookies.currencyCode} {parseInt((gemstone.priceDetails[product.weightIndex].price + gemCertification[product.certificateIndex].price) * cookies.exchangeRate[cookies.currencyCode])} </p> */}
//                         </div>
//                     </div>

//                     :

//                     <div className='item-holder'>
//                         <div className='image-holder' >
//                             <img
//                             src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                             alt="diamond"/>
//                         </div>
//                         <div className='details-holder'>
//                                 <h2>Gemstone not available</h2>
//                         </div>
//                     </div>
//                 }

//             </div>

//             :

//             product.itemType === 'gem-ring'

//             ?

//             <div className='item'>
//                 <div className='item-top-bar'>
//                     <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Loose Gemstone</p>
//                     <div className='buttons-container'>
//                         {/* <p>
//                             View
//                         </p>
//                         <div className='seperator'>

//                         </div> */}
//                         <p onClick={() => remove(product)}>
//                             Remove
//                         </p>
//                     </div>
//                 </div>
//                 {
//                     !isAllSet

//                     ?

//                     <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                     :

//                     isObjectEmpty

//                     ?

//                     <div className='item-holder'>
//                         <div className='image-holder' >
//                             <img
//                                 src={gemRing.ring}
//                                 alt="gem-ring"
//                             />
//                         </div>
//                         <div className='details-holder'>
//                             <h2 >{gemRing.stockNumber} Ring On {gemRing.gemstone}<br/> </h2>
//                             {/* <p className='item-price'>Price: {cookies.currencyCode} {parseInt((gemstone.priceDetails[product.weightIndex].price + gemCertification[product.certificateIndex].price) * cookies.exchangeRate[cookies.currencyCode])} </p> */}
//                         </div>
//                     </div>

//                     :

//                     <div className='item-holder'>
//                         <div className='image-holder' >
//                             <img
//                             src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                             alt="diamond"/>
//                         </div>
//                         <div className='details-holder'>
//                                 <h2>Gemstone not available</h2>
//                         </div>
//                     </div>
//                 }

//             </div>

//                 :

//                 product.itemType === 'gem-pendant'

//                 ?

//                 <div className='item'>
//                     <div className='item-top-bar'>
//                         <p className='category'><span style={{fontWeight:'bold', fontStyle:'none'}}>Category:</span> Loose Gemstone</p>
//                         <div className='buttons-container'>
//                             {/* <p>
//                                 View
//                             </p>
//                             <div className='seperator'>

//                             </div> */}
//                             <p onClick={() => remove(product)}>
//                                 Remove
//                             </p>
//                         </div>
//                     </div>
//                     {
//                         !isAllSet

//                         ?

//                         <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

//                         :

//                         isObjectEmpty

//                         ?

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                     src={gemPendant.pendant}
//                                     alt="gem-pendant"
//                                 />
//                             </div>
//                             <div className='details-holder'>
//                                 <h2 >{gemPendant.stockNumber} Pendant On {gemPendant.gemstone}<br/> </h2>
//                                 {/* <p className='item-price'>Price: {cookies.currencyCode} {parseInt((gemstone.priceDetails[product.weightIndex].price + gemCertification[product.certificateIndex].price) * cookies.exchangeRate[cookies.currencyCode])} </p> */}
//                             </div>
//                         </div>

//                         :

//                         <div className='item-holder'>
//                             <div className='image-holder' >
//                                 <img
//                                 src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg'
//                                 alt="diamond"/>
//                             </div>
//                             <div className='details-holder'>
//                                     <h2>Gemstone not available</h2>
//                             </div>
//                         </div>
//                     }

//                 </div>

//             :

//                 <div>

//                 </div>
//             }
//         </WishlistItemBox>
//     )
// }

// export default WishlistItem

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { WishlistItemBox } from "./style";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { letsShowFlash } from "../../../store/actions/flashAction";

const WishlistItem = ({
  unfilteredDiamondArray,
  findDiamond,
  product,
  unfilteredSolitaireRingsArray,
  unfilteredSolitaireNecklacesArray,
  unfilteredSolitaireStudsArray,
  unfilteredFashionRingsArray,
  unfilteredDiamondPendantsArray,
  unfilteredDiamondEarringsArray,
  unfilteredAlphabetPendantsArray,
  unfilteredGemstonesArray,
  unfilteredGemstonesRingsArray,
  unfilteredGemstonesPendantsArray,
  unfilteredMensBraceletsArray,
  unfilteredMensStudsArray,
  unfilteredMensChainsArray,
  unfilteredMensKadasArray,
  unfilteredMensRingsArray,
  unfilteredNosePinsArray,
  findJewelry,
  nfObject,
  isAllSet,
  removeFromWishlist,
}) => {
  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies();
  const [stoneDisplayStatus, setStoneDisplayStatus] = useState(true);
  const [jewelryDisplayStatus, setJewelryDisplayStatus] = useState(false);
  const [isObjectEmpty, setIsObjectEmpty] = useState(false);

  let diamond = findDiamond(unfilteredDiamondArray, product.stockNumber);
  let fashionRing = findJewelry(
    unfilteredFashionRingsArray,
    product.stockNumber
  );
  let diamondPendant = findJewelry(
    unfilteredDiamondPendantsArray,
    product.stockNumber
  );
  let diamondEarring = findJewelry(
    unfilteredDiamondEarringsArray,
    product.stockNumber
  );
  let alphabetPendant = findJewelry(
    unfilteredAlphabetPendantsArray,
    product.stockNumber
  );
  let nosePin = findJewelry(unfilteredNosePinsArray, product.stockNumber);
  let mensRing = findJewelry(unfilteredMensRingsArray, product.stockNumber);
  let mensChain = findJewelry(unfilteredMensChainsArray, product.stockNumber);
  let mensKada = findJewelry(unfilteredMensKadasArray, product.stockNumber);
  let mensBracelet = findJewelry(
    unfilteredMensBraceletsArray,
    product.stockNumber
  );
  let mensStud = findJewelry(
    unfilteredSolitaireStudsArray,
    product.stockNumber
  );
  let gemstone = findJewelry(unfilteredGemstonesArray, product.stockNumber);
  let gemRing = findJewelry(unfilteredGemstonesRingsArray, product.stockNumber);
  let gemPendant = findJewelry(
    unfilteredGemstonesPendantsArray,
    product.stockNumber
  );
  let customRing = findJewelry(
    unfilteredSolitaireRingsArray,
    product.stockNumber
  );
  let customNecklace = findJewelry(
    unfilteredSolitaireNecklacesArray,
    product.stockNumber
  );
  let customStud = findJewelry(
    unfilteredSolitaireStudsArray,
    product.stockNumber
  );
  let solitaireRing = findJewelry(
    unfilteredSolitaireRingsArray,
    product.stockNumber
  );
  let presetNecklace = findJewelry(
    unfilteredSolitaireNecklacesArray,
    product.stockNumber
  );
  let presetStud = findJewelry(
    unfilteredSolitaireStudsArray,
    product.stockNumber
  );
  let firstStudDiamond = findDiamond(
    unfilteredDiamondArray,
    product.stockNumber
  );
  let secondStudDiamond = findDiamond(
    unfilteredDiamondArray,
    product.stockNumber
  );

  const getSampleDiamondImage = (shape) => {
    switch (shape) {
      case "heart":
        return {
          shape: "Heart",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/heart.jpg",
        };
        break;
      case "radiant":
        return {
          shape: "Radiant",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/radiant.jpg",
        };
        break;
      case "emerald":
        return {
          shape: "Emerald",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/emerald.jpg",
        };
        break;
      case "round":
        return {
          shape: "Round",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg",
        };
        break;
      case "pear":
        return {
          shape: "Pear",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/pear.jpg",
        };
        break;
      case "cushion":
        return {
          shape: "Cushion",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/cushion.jpg",
        };
        break;
      case "asscher":
        return {
          shape: "Square Emerald",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/asscher.jpg",
        };
        break;
      case "princess":
        return {
          shape: "Princess",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/princess.jpg",
        };
        break;
      case "oval":
        return {
          shape: "Oval",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/oval.jpg",
        };
        break;
      case "marquise":
        return {
          shape: "Marquise",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/marquise.jpg",
        };
        break;
    }
  };

  const remove = (product) => {
    dispatch(removeFromWishlist(product));
    dispatch(letsShowFlash("Item Removed From The Wishlist"));
  };

  return (
    <WishlistItemBox
      jewelryImageStatus={jewelryDisplayStatus}
      stoneImageStatus={stoneDisplayStatus}
    >
      {product.itemType === "loose-diamond" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Loose Diamond
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : diamond ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={
                    diamond.imageUrl.length > 5
                      ? diamond.imageUrl
                      : getSampleDiamondImage(diamond.diamondShape).imgURL
                  }
                  alt="diamond"
                  id={product.stockNumber}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getSampleDiamondImage(
                      diamond.diamondShape
                    ).imgURL;
                  }}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {diamond.carat} Carat {diamond.clarity} Clarity <br />{" "}
                  {getSampleDiamondImage(diamond.diamondShape).shape} Natural
                  Diamond
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode}  {getTotalPrice('loose-diamond', diamond, cookies)}</p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Diamond not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "solitaire-ring" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : solitaireRing ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={solitaireRing.metals[product.metalCode].imgURL}
                  alt="ring"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {solitaireRing.metalWeight} Gms 18KT Gold{" "}
                  {solitaireRing.ringName} Ring
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('solitaire-ring', fashionRing, cookies, product.presetDiamondCarat, product.presetDiamondQuality)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "preset-necklace" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : presetNecklace ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={presetNecklace.metals[product.metalCode].imgURL}
                  alt="necklace"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {presetNecklace.metalWeight} Gms 18KT Gold{" "}
                  {presetNecklace.necklaceName} Necklace
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('preset-necklace', presetNecklace, cookies, product.presetDiamondCarat, product.presetDiamondQuality)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Necklace not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "mens-ring" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : mensRing ? (
            <div className="item-holder">
              <div className="image-holder">
                <img src={mensRing.imageUrl} alt="mens-ring" id={product.id} />
              </div>
              <div className="details-holder">
                <h2>
                  {mensRing.metalWeight} Gms 18KT Gold {mensRing.ringName} Ring
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('mens-ring', mensRing, cookies, product.presetDiamondCarat, product.presetDiamondQuality, product.weightIndex)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "preset-stud" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>

          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : presetStud ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={presetStud.metals[product.metalCode].imgURL}
                  alt="mens-ring"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {presetStud.metalWeight} Gms 18KT Gold {presetStud.studName}{" "}
                  Stud
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('preset-stud', presetStud, cookies, product.presetDiamondCarat, product.presetDiamondQuality, null, product.studQuantity)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Studs not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "mens-stud" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                            View
                        </p>
                        <div className='seperator'>

                        </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>

          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : mensStud ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={presetStud.metals[product.metalCode].imgURL}
                  alt="mens-ring"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {presetStud.metalWeight} Gms 18KT Gold {presetStud.studName}{" "}
                  Stud
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('preset-stud', presetStud, cookies, product.presetDiamondCarat, product.presetDiamondQuality, null, product.studQuantity)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Studs not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "mens-kada" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : mensKada ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={mensKada.imageUrl}
                  alt="mens-kada"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {mensKada.weight} 18KT Gold {mensKada.kadaName}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('mens-kada', mensKada, cookies, null, null, product.weightIndex)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "gold-chain" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : mensChain ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={mensChain.imageUrl}
                  alt="mens-kada"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {mensChain.weight} 22KT {mensChain.chainName}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('gold-chain', mensChain, cookies, null, null, product.weightIndex)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Chain not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "mens-bracelet" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : mensBracelet ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={mensBracelet.imageUrl}
                  alt="mens-bracelet"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {mensBracelet.weight} 22KT {mensBracelet.braceletName}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getTotalPrice('mens-bracelet', mensBracelet, cookies, null, null, product.weightIndex)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "diamond-earring" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : diamondEarring ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={diamondEarring.imageArray[0]}
                  alt="diamond-earring"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {diamondEarring.metalWeight} 22KT {diamondEarring.productName}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('diamond-earring', product.weight, cookies, product.smallDiamondPrice, product.solitaireDiamondPrice)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Earring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "diamond-pendant" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : diamondPendant ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={diamondPendant.imageArray[0]}
                  alt="diamond-pendant"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {diamondPendant.metalWeight} 22KT {diamondPendant.productName}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('diamond-pendant', product.weight, cookies, product.smallDiamondPrice, product.solitaireDiamondPrice)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "alphabet-pendant" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : alphabetPendant ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={alphabetPendant.image}
                  alt="diamond-pendant"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {alphabetPendant.metalWeight} 22KT{" "}
                  {alphabetPendant.productName}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('alphabet-pendant', product.weight, cookies, product.smallDiamondPrice)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Pendant not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "fashion-ring" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : fashionRing ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={fashionRing.imageArray[0]}
                  alt="fashion-ring"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {fashionRing.ringSizeWeightArray[product.weightIndex]} 22KT{" "}
                  {fashionRing.productName}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('fashion-ring', fashionRing.ringSizeWeightArray[product.weightIndex], cookies, product.smallDiamondPrice, product.solitaireDiamondPrice, fashionRing)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "nose-pin" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : nosePin ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={nosePin.imageArray[0]}
                  alt="nose-pin"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {nosePin.metalWeight} 22KT {nosePin.productName}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {getNewArrivalsTotalPrice('nose-pin', nosePin.metalWeight, cookies, product.smallDiamondPrice)} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Nose pin not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "loose-gemstone" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Loose Gemstone
            </p>
            <div className="buttons-container">
              {/* <p>
                            View
                        </p>
                        <div className='seperator'>

                        </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : gemstone ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={gemstone.images[0]}
                  alt="gemstone"
                  id={product.stockNumber}
                />
              </div>
              <div className="details-holder">
                <h2>{gemstone.type}</h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {parseInt((gemstone.priceDetails[product.weightIndex].price + gemCertification[product.certificateIndex].price) * cookies.exchangeRate[cookies.currencyCode])} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Gemstone not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "gem-ring" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Loose Gemstone
            </p>
            <div className="buttons-container">
              {/* <p>
                            View
                        </p>
                        <div className='seperator'>

                        </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : gemRing ? (
            <div className="item-holder">
              <div className="image-holder">
                <img src={gemRing.ring} alt="gem-ring" />
              </div>
              <div className="details-holder">
                <h2>
                  {gemRing.stockNumber} Ring On {gemRing.gemstone}
                  <br />{" "}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {parseInt((gemstone.priceDetails[product.weightIndex].price + gemCertification[product.certificateIndex].price) * cookies.exchangeRate[cookies.currencyCode])} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Gemstone not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "gem-pendant" ? (
        <div className="item">
          <div className="item-top-bar">
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Loose Gemstone
            </p>
            <div className="buttons-container">
              {/* <p>
                                View
                            </p>
                            <div className='seperator'>

                            </div> */}
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : gemPendant ? (
            <div className="item-holder">
              <div className="image-holder">
                <img src={gemPendant.pendant} alt="gem-pendant" />
              </div>
              <div className="details-holder">
                <h2>
                  {gemPendant.stockNumber} Pendant On {gemPendant.gemstone}
                  <br />{" "}
                </h2>
                {/* <p className='item-price'>Price: {cookies.currencyCode} {parseInt((gemstone.priceDetails[product.weightIndex].price + gemCertification[product.certificateIndex].price) * cookies.exchangeRate[cookies.currencyCode])} </p> */}
              </div>
            </div>
          ) : (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
                  alt="diamond"
                />
              </div>
              <div className="details-holder">
                <h2>Gemstone not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </WishlistItemBox>
  );
};

export default WishlistItem;
