// import React,{useState, useEffect} from 'react'
// import {CartItemBox} from './style'
// import {useCookies} from 'react-cookie'
// import getTotalPrice from '../../../helper/getTotalPrice'
// import getNewArrivalsTotalPrice from '../../../helper/getNewArrivalsTotalPrice'
// import gemCertification from '../../../fakedata/gemCertification'
// import { useSelector, useDispatch } from 'react-redux'
// import {letsShowFlash} from '../../../store/actions/flashAction'

// const CartItem = ({
//         cartItems,
//         itemCount,
//         unfilteredDiamondArray,
//         findDiamond,
//         product,
//         unfilteredSolitaireRingsArray,
//         unfilteredSolitaireNecklacesArray,
//         unfilteredSolitaireStudsArray,
//         unfilteredFashionRingsArray,
//         unfilteredDiamondPendantsArray,
//         unfilteredDiamondEarringsArray,
//         unfilteredAlphabetPendantsArray,
//         unfilteredGemstonesArray,
//         unfilteredGemstonesRingsArray,
//         unfilteredGemstonesPendantsArray,
//         unfilteredMensBraceletsArray,
//         unfilteredMensStudsArray,
//         unfilteredMensChainsArray,
//         unfilteredMensKadasArray,
//         unfilteredMensRingsArray,
//         unfilteredNosePinsArray,
//         findJewelry,
//         removeItem,
//         nfObject,
//         isAllSet
//     }) => {

//     const data = useSelector(state => state)
//     const dispatch = useDispatch()
//     const [cookies, setCookie] = useCookies()
//     const [stoneDisplayStatus, setStoneDisplayStatus] = useState(true)
//     const [jewelryDisplayStatus, setJewelryDisplayStatus] = useState(false)
//     const [isObjectEmpty, setIsObjectEmpty] = useState(false)

//     const [cartObject, setCartObject] = useState({
//       diamond: {},
//       fashionRing: {},
//       diamondPendant: {},
//       diamondEarring: {},
//       alphabetPendant: {},
//       nosePin: {},
//       mensRing: {},
//       mensChain: {},
//       mensKada: {},
//       mensBracelet: {},
//       mensStud: {},
//       gemstone: {},
//       gemRing: {},
//       gemPendant: {},
//       customRing: {},
//       customNecklace: {},
//       customStud: {},
//       presetRing: {},
//       presetNecklace: {},
//       presetStud: {},
//       firstStudDiamond: {},
//       secondStudDiamond: {}
//     })

//     const remove = (product) => {
//         dispatch(removeItem({id: product.itemId}))
//         dispatch(letsShowFlash('Item Removed From The Cart'))
//     }

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
//             default:
//               return {
//                 shape: "Round",
//                 imgURL:"https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                }
//                 break
//         }
//     }

//     const getGemSettingMetalName = (metalCode) => {
//       switch (metalCode) {
//           case 0:
//               return 'Silver'
//               break;
//           case 1:
//               return 'Panchdhatu'
//               break;
//           case 2:
//               return '22K Yellow Gold'
//               break;
//           case 3:
//               return '18K Yellow Gold'
//               break;
//           case 4:
//               return '18K White Gold'
//               break;
//           case 5:
//               return 'Platinum 950'
//               break;
//           default:
//               return 'Silver'
//               break;
//       }
//   }

//     useEffect(() => {
//         ( async () => {
//            switch(product.itemType){
//                case 'loose-diamond':
//                   let foundDiamondObject = await findDiamond(unfilteredDiamondArray, product.diamondId)
//                   setCartObject({ ...cartObject, diamond: {...foundDiamondObject}})
//                   setIsObjectEmpty(foundDiamondObject ? !(Object.keys(foundDiamondObject).length === 0 && foundDiamondObject.constructor === Object) : false)
//                 break;
//                case 'preset-ring':
//                   let foundSolitaireRing = await findJewelry(unfilteredSolitaireRingsArray, product.ringId)
//                   setCartObject({ ...cartObject, presetRing: {...foundSolitaireRing}})
//                   setIsObjectEmpty(foundSolitaireRing ? !(Object.keys(foundSolitaireRing).length === 0 && foundSolitaireRing.constructor === Object) : false)
//                 break;
//                case 'preset-necklace':
//                   let foundSolitaireNecklace = await findJewelry(unfilteredSolitaireNecklacesArray, product.necklaceId)
//                   setCartObject({ ...cartObject, presetNecklace: {...foundSolitaireNecklace}})
//                   setIsObjectEmpty(foundSolitaireNecklace ? !(Object.keys(foundSolitaireNecklace).length === 0 && foundSolitaireNecklace.constructor === Object) : false)
//                 break;
//                case 'preset-stud':
//                   let foundSolitaireStud = await findJewelry(unfilteredSolitaireStudsArray, product.studId)
//                   setCartObject({ ...cartObject, presetStud: {...foundSolitaireStud}})
//                   setIsObjectEmpty(foundSolitaireStud ? !(Object.keys(foundSolitaireStud).length === 0 && foundSolitaireStud.constructor === Object) : false)
//                 break;
//                case 'fashion-ring':
//                   let foundFashionRingObject = await findJewelry(unfilteredFashionRingsArray, product.ringId)
//                   setCartObject({...cartObject, fashionRing: {...foundFashionRingObject}})
//                   setIsObjectEmpty(foundFashionRingObject ? !(Object.keys(foundFashionRingObject).length === 0 && foundFashionRingObject.constructor === Object) : false)
//                 break;
//                case 'diamond-pendant':
//                   let foundPendant = await findJewelry(unfilteredDiamondPendantsArray, product.pendantId)
//                   setCartObject({...cartObject, diamondPendant: {...foundPendant}})
//                   setIsObjectEmpty(foundPendant ? !(Object.keys(foundPendant).length === 0 && foundPendant.constructor === Object) : false)
//                 break;
//                case 'alphabet-pendant':
//                   let foundAlphabetPendant = await findJewelry(unfilteredAlphabetPendantsArray, product.pendantId)
//                   setCartObject({...cartObject, alphabetPendant: {...foundAlphabetPendant}})
//                   setIsObjectEmpty(foundAlphabetPendant ? !(Object.keys(foundAlphabetPendant).length === 0 && foundAlphabetPendant.constructor === Object) : false)
//                 break;
//                case 'diamond-earring':
//                   let foundDiamondEarring = await findJewelry(unfilteredDiamondEarringsArray, product.earringId)
//                   setCartObject({...cartObject, diamondEarring: {...foundDiamondEarring}})
//                   setIsObjectEmpty(foundDiamondEarring ? !(Object.keys(foundDiamondEarring).length === 0 && foundDiamondEarring.constructor === Object) : false)
//                 break;
//                case 'nose-pin':
//                   let foundNosePin = await findJewelry(unfilteredNosePinsArray, product.pinId)
//                   setCartObject({...cartObject, nosePin: {...foundNosePin}})
//                   setIsObjectEmpty(foundNosePin ? !(Object.keys(foundNosePin).length === 0 && foundNosePin.constructor === Object) : false)
//                 break;
//                case 'mens-ring':
//                   let foundMensRing = await findJewelry(unfilteredMensRingsArray, product.ringId)
//                   setCartObject({...cartObject, mensRing: {...foundMensRing}})
//                   setIsObjectEmpty(foundMensRing ? !(Object.keys(foundMensRing).length === 0 && foundMensRing.constructor === Object) : false)
//                 break;
//                case 'gold-chain':
//                   let foundMensChain = await findJewelry(unfilteredMensChainsArray, product.chainId)
//                   setCartObject({...cartObject, mensChain: {...foundMensChain}})
//                   setIsObjectEmpty(foundMensChain ? !(Object.keys(foundMensChain).length === 0 && foundMensChain.constructor === Object) : false)
//                 break;
//                case 'mens-kada':
//                   let foundMensKada = await findJewelry(unfilteredMensKadasArray, product.kadaId)
//                   setCartObject({...cartObject, mensKada: {...foundMensKada}})
//                   setIsObjectEmpty(foundMensKada ? !(Object.keys(foundMensKada).length === 0 && foundMensKada.constructor === Object) : false)
//                 break;
//                case 'mens-bracelet':
//                   let foundMensBracelet = await findJewelry(unfilteredMensBraceletsArray, product.braceletId)
//                   setCartObject({...cartObject, mensBracelet: {...foundMensBracelet}})
//                   setIsObjectEmpty(foundMensBracelet ? !(Object.keys(foundMensBracelet).length === 0 && foundMensBracelet.constructor === Object) : false)
//                 break;
//                case 'mens-stud':
//                   let foundMensStud = await findJewelry(unfilteredSolitaireStudsArray, product.studId)
//                   setCartObject({ ...cartObject, mensStud: {...foundMensStud}})
//                   setIsObjectEmpty(foundMensStud ? !(Object.keys(foundMensStud).length === 0 && foundMensStud.constructor === Object) : false)
//                 break;
//                case 'custom-ring':
//                   let foundCustomRing = await findJewelry(unfilteredSolitaireRingsArray, product.ringId)
//                   let foundCustomRingDiamond = await findDiamond(unfilteredDiamondArray, product.diamondId)
//                   setCartObject({ ...cartObject, customRing: {...foundCustomRing}, diamond: {...foundCustomRingDiamond}})
//                   let isRingObjectEmpty = foundCustomRing ? !(Object.keys(foundCustomRing).length === 0 && foundCustomRing.constructor === Object) : false
//                   let isDiamondForRingObjectEmpty = foundCustomRingDiamond ? !(Object.keys(foundCustomRingDiamond).length === 0 && foundCustomRingDiamond.constructor === Object) : false
//                   setIsObjectEmpty(isRingObjectEmpty && isDiamondForRingObjectEmpty)
//                 break;
//                case 'custom-necklace':
//                   let foundCustomNecklace = await findJewelry(unfilteredSolitaireNecklacesArray, product.necklaceId)
//                   let foundCustomNecklaceDiamond = await findDiamond(unfilteredDiamondArray, product.diamondId)
//                   setCartObject({ ...cartObject, customNecklace: {...foundCustomNecklace}, diamond: {...foundCustomNecklaceDiamond}})
//                   let isNecklaceObjectEmpty = foundCustomNecklace ? !(Object.keys(foundCustomNecklace).length === 0 && foundCustomNecklace.constructor === Object) : false
//                   let isDiamondForNecklaceObjectEmpty = foundCustomNecklaceDiamond ? !(Object.keys(foundCustomNecklaceDiamond).length === 0 && foundCustomNecklaceDiamond.constructor === Object) : false
//                   setIsObjectEmpty(isNecklaceObjectEmpty && isDiamondForNecklaceObjectEmpty)
//                 break;
//                case 'custom-stud':
//                   let foundCustomStud = await findJewelry(unfilteredSolitaireStudsArray, product.studId)
//                   let foundCustomStudFirstDiamond = await findDiamond(unfilteredDiamondArray, product.firstDiamondId)
//                   let foundCustomStudSecondDiamond = await findDiamond(unfilteredDiamondArray, product.secondDiamondId)
//                   setCartObject({ ...cartObject, customStud: {...foundCustomStud}, firstStudDiamond: {...foundCustomStudFirstDiamond}, secondStudDiamond: {...foundCustomStudSecondDiamond}})
//                   let isStudObjectEmpty = foundCustomStud ? !(Object.keys(foundCustomStud).length === 0 && foundCustomStud.constructor === Object) : false
//                   let isFirstDiamondForStudObjectEmpty = foundCustomStudFirstDiamond ? !(Object.keys(foundCustomStudFirstDiamond).length === 0 && foundCustomStudFirstDiamond.constructor === Object) : false
//                   let isSecondDiamondForStudObjectEmpty = foundCustomStudSecondDiamond ? !(Object.keys(foundCustomStudSecondDiamond).length === 0 && foundCustomStudSecondDiamond.constructor === Object) : false
//                   setIsObjectEmpty(isStudObjectEmpty && isFirstDiamondForStudObjectEmpty && isSecondDiamondForStudObjectEmpty)
//                  break;
//                case 'loose-gemstone':
//                  let foundLooseGemstone = await findJewelry(unfilteredGemstonesArray, product.gemstoneId)
//                  setCartObject({...cartObject, gemstone: {...foundLooseGemstone}})
//                  setIsObjectEmpty(foundLooseGemstone ? !(Object.keys(foundLooseGemstone).length === 0 && foundLooseGemstone.constructor === Object) : false)
//                 break;
//                case 'gem-ring':
//                  let foundGemRing = await findJewelry(unfilteredGemstonesRingsArray, product.ringId)
//                  let foundGemRingGemstone = await findJewelry(unfilteredGemstonesArray, product.gemstoneId)
//                  setCartObject({...cartObject, gemRing: {...foundGemRing}, gemstone: {...foundGemRingGemstone}})
//                  let isGemRingObjectEmpty = foundGemRing ? !(Object.keys(foundGemRing).length === 0 && foundGemRing.constructor === Object) : false
//                  let isGemRingGemstoneObjectEmpty = foundGemRingGemstone ? !(Object.keys(foundGemRingGemstone).length === 0 && foundGemRingGemstone.constructor === Object) : false
//                  setIsObjectEmpty(isGemRingObjectEmpty && isGemRingGemstoneObjectEmpty)
//                 break;
//                case 'gem-pendant':
//                  let foundGemPendant = await findJewelry(unfilteredGemstonesPendantsArray, product.pendantId)
//                  let foundGemPendantGemstone = await findJewelry(unfilteredGemstonesArray, product.gemstoneId)
//                  setCartObject({...cartObject, gemPendant: {...foundGemPendant}, gemstone: {...foundGemPendantGemstone}})
//                  let isGemPendantObjectEmpty = foundGemPendant ? !(Object.keys(foundGemPendant).length === 0 && foundGemPendant.constructor === Object) : false
//                  let isGemPendantGemstoneObjectEmpty = foundGemPendantGemstone ? !(Object.keys(foundGemPendantGemstone).length === 0 && foundGemPendantGemstone.constructor === Object) : false
//                  setIsObjectEmpty(isGemPendantObjectEmpty && isGemPendantGemstoneObjectEmpty)
//                 break;
//                default:
//                 return
//            }
//         })()
//     },[isAllSet, itemCount])

//     return (
//       <CartItemBox
//         jewelryImageStatus={jewelryDisplayStatus}
//         stoneImageStatus={stoneDisplayStatus}
//       >
//         {product.itemType === "loose-diamond" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Loose Diamond
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!(isAllSet) ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : (
//               <div>
//                 {
//                 isObjectEmpty ?
//                 <div className="item-holder">
//                   <div className="image-holder">
//                     <img
//                       src={
//                         diamond.imageUrl.length > 5
//                           ? diamond.imageUrl
//                           : getSampleDiamondImage(diamond.diamondShape)
//                               .imgURL
//                       }
//                       alt="diamond"
//                       id={product.diamondId}
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = getSampleDiamondImage(
//                           diamond.diamondShape
//                         ).imgURL;
//                       }}
//                     />
//                   </div>
//                   <div className="details-holder">
//                     <h2>
//                       {diamond.carat} Carat {diamond.clarity}{" "}
//                       {getSampleDiamondImage(diamond.diamondShape).shape}{" "}
//                       Natural Diamond
//                     </h2>
//                     <p className="item-price">
//                       Price: {cookies.currencyCode}{" "}
//                       {getTotalPrice("loose-diamond", diamond, cookies)}
//                     </p>
//                   </div>
//                 </div>
//                 :
//                 <div className="item-holder">
//                   <div className="image-holder">
//                     <img
//                       src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                       alt="diamond"
//                     />
//                   </div>
//                   <div className="details-holder">
//                     <h2>Diamond not available</h2>
//                   </div>
//                 </div>
//                 }
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "custom-ring" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Custom Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     className="stone-image"
//                     src={
//                       diamond.imageUrl.length > 5
//                         ? diamond.imageUrl
//                         : getSampleDiamondImage(diamond.shape).imgURL
//                     }
//                     alt="diamond"
//                     id={product.diamondId}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = getSampleDiamondImage(
//                         diamond.shape
//                       ).imgURL;
//                     }}
//                     onClick={() => {
//                       setJewelryDisplayStatus(false);
//                       setStoneDisplayStatus(true);
//                     }}
//                   />

//                   <img
//                     className="jewelry-image"
//                     src={customRing.metals[0].imgURL}
//                     alt="ring"
//                     id={product.ringId}
//                     onClick={() => {
//                       setJewelryDisplayStatus(true);
//                       setStoneDisplayStatus(false);
//                     }}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <div>
//                     <h2>
//                       {diamond.carat} Carat {diamond.clarity}{" "}
//                       {diamond.diamondShape} Natural Diamond
//                     </h2>
//                     <h2>
//                       {customRing.metalWeight} Gms 18KT Gold{" "}
//                       {customRing.ringName} Ring
//                     </h2>
//                   </div>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice("custom-ring", customRing, cookies) +
//                       getTotalPrice(
//                         "loose-diamond",
//                         diamond,
//                         cookies
//                       )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Diamond not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "preset-ring" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Preset Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={presetRing.metals[product.metalCode].imgURL}
//                     alt="ring"
//                     id={product.ringId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {presetRing.metalWeight} Gms 18KT Gold {presetRing.ringName}{" "}
//                     Ring
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice(
//                       "preset-ring",
//                       presetRing,
//                       cookies,
//                       product.presetDiamondCarat,
//                       product.presetDiamondQuality
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Ring not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "custom-necklace" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Custom Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>

//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     className="stone-image"
//                     src={
//                       diamond.imageUrl.length > 5
//                         ? diamond.imageUrl
//                         : getSampleDiamondImage(diamond.shape).imgURL
//                     }
//                     alt="diamond"
//                     id={product.diamondId}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = getSampleDiamondImage(
//                         diamond.shape
//                       ).imgURL;
//                     }}
//                     onClick={() => {
//                       setJewelryDisplayStatus(false);
//                       setStoneDisplayStatus(true);
//                     }}
//                   />

//                   <img
//                     className="jewelry-image"
//                     src={customNecklace.metals[0].imgURL}
//                     alt="necklace"
//                     id={product.necklaceId}
//                     onClick={() => {
//                       setJewelryDisplayStatus(true);
//                       setStoneDisplayStatus(false);
//                     }}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <div>
//                     <h2>
//                       {diamond.carat} Carat {diamond.clarity}{" "}
//                       {diamond.diamondShape} Natural Diamond
//                     </h2>
//                     <h2>
//                       {customNecklace.metalWeight} Gms 18KT Gold{" "}
//                       {customNecklace.necklaceName} Necklace
//                     </h2>
//                   </div>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice("custom-necklace", customNecklace, cookies) +
//                       getTotalPrice(
//                         "loose-diamond",
//                         diamond,
//                         cookies
//                       )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Diamond not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "preset-necklace" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Preset Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={presetNecklace.metals[product.metalCode].imgURL}
//                     alt="necklace"
//                     id={product.necklaceId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {presetNecklace.metalWeight} Gms 18KT Gold{" "}
//                     {presetNecklace.necklaceName} Necklace
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice(
//                       "preset-necklace",
//                       presetNecklace,
//                       cookies,
//                       product.presetDiamondCarat,
//                       product.presetDiamondQuality
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Necklace not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "mens-ring" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Mens Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={mensRing.imageUrl}
//                     alt="mens-ring"
//                     id={product.id}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {mensRing.metalWeight} Gms 18KT Gold{" "}
//                     {mensRing.ringName} Ring
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice(
//                       "mens-ring",
//                       mensRing,
//                       cookies,
//                       product.presetDiamondCarat,
//                       product.presetDiamondQuality,
//                       product.weightIndex
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Ring not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "preset-stud" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Preset Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>

//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={presetStud.metals[product.metalCode].imgURL}
//                     alt="mens-ring"
//                     id={product.studId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {presetStud.metalWeight} Gms 18KT Gold {presetStud.studName}{" "}
//                     Stud
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice(
//                       "preset-stud",
//                       presetStud,
//                       cookies,
//                       product.presetDiamondCarat,
//                       product.presetDiamondQuality,
//                       null,
//                       product.studQuantity
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Studs not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "mens-stud" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Mens Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>

//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={mensStud.metals[product.metalCode].imgURL}
//                     alt="mens-ring"
//                     id={product.studId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {mensStud.metalWeight} Gms 18KT Gold {mensStud.studName}{" "}
//                     Stud
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice(
//                       "preset-stud",
//                       mensStud,
//                       cookies,
//                       product.presetDiamondCarat,
//                       product.presetDiamondQuality,
//                       null,
//                       product.studQuantity
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Studs not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "mens-kada" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Mens Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={mensKada.imageUrl}
//                     alt="mens-kada"
//                     id={product.kadaId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {mensKada.weight} 18KT Gold {mensKada.kadaName}
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice(
//                       "mens-kada",
//                       mensKada,
//                       cookies,
//                       null,
//                       null,
//                       product.weightIndex
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Ring not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "gold-chain" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Mens Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={mensChain.imageUrl}
//                     alt="mens-kada"
//                     id={product.chainId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {mensChain.weight} 22KT {mensChain.chainName}
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice(
//                       "gold-chain",
//                       mensChain,
//                       cookies,
//                       null,
//                       null,
//                       product.weightIndex
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Chain not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "mens-bracelet" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Mens Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={mensBracelet.imageUrl}
//                     alt="mens-bracelet"
//                     id={product.braceletId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {mensBracelet.weight} 22KT {mensBracelet.braceletName}
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice(
//                       "mens-bracelet",
//                       mensBracelet,
//                       cookies,
//                       null,
//                       null,
//                       product.weightIndex
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Ring not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "diamond-earring" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Women Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={diamondEarring.imageArray[0]}
//                     alt="diamond-earring"
//                     id={product.earringId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {diamondEarring.metalWeight} 22KT{" "}
//                     {diamondEarring.productName}
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getNewArrivalsTotalPrice(
//                       "diamond-earring",
//                       product.weight,
//                       cookies,
//                       product.smallDiamondPrice,
//                       product.solitaireDiamondPrice
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Ring not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "diamond-pendant" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Women Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={diamondPendant.imageArray[0]}
//                     alt="diamond-pendant"
//                     id={product.pendantId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {diamondPendant.metalWeight} 22KT{" "}
//                     {diamondPendant.productName}
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getNewArrivalsTotalPrice(
//                       "diamond-pendant",
//                       product.weight,
//                       cookies,
//                       product.smallDiamondPrice,
//                       product.solitaireDiamondPrice
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Ring not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "alphabet-pendant" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Women Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={alphabetPendant.image}
//                     alt="diamond-pendant"
//                     id={product.pendantId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {alphabetPendant.metalWeight} 22KT{" "}
//                     {alphabetPendant.productName}
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getNewArrivalsTotalPrice(
//                       "alphabet-pendant",
//                       product.weight,
//                       cookies,
//                       product.smallDiamondPrice
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Pendant not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "fashion-ring" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Women Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!(isAllSet) ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={fashionRing.imageArray[0]}
//                     alt="fashion-ring"
//                     id={product.ringId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {fashionRing.ringSizeWeightArray[product.weightIndex]}{" "}
//                     22KT {fashionRing.productName}
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getNewArrivalsTotalPrice(
//                       "fashion-ring",
//                       fashionRing.ringSizeWeightArray[
//                         product.weightIndex
//                       ],
//                       cookies,
//                       product.smallDiamondPrice,
//                       product.solitaireDiamondPrice,
//                       fashionRing
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Ring not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "nose-pin" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Women Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={nosePin.imageArray[0]}
//                     alt="nose-pin"
//                     id={product.pinId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>
//                     {nosePin.metalWeight} 22KT {nosePin.productName}
//                   </h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getNewArrivalsTotalPrice(
//                       "nose-pin",
//                       nosePin.metalWeight,
//                       cookies,
//                       product.smallDiamondPrice
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Nose pin not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "custom-stud" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Custom Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>

//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     className="stone-image"
//                     src={
//                       firstStudDiamond.imageUrl.length > 5
//                         ? firstStudDiamond.imageUrl
//                         : getSampleDiamondImage(firstStudDiamond.shape).imgURL
//                     }
//                     alt="diamond"
//                     id={product.firstDiamondForStud}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = getSampleDiamondImage(
//                         firstStudDiamond.shape
//                       ).imgURL;
//                     }}
//                     onClick={() => {
//                       setJewelryDisplayStatus(false);
//                       setStoneDisplayStatus(true);
//                     }}
//                   />

//                   <img
//                     className="jewelry-image"
//                     src={customStud.metals[0].imgURL}
//                     alt="stud"
//                     id={product.studId}
//                     onClick={() => {
//                       setJewelryDisplayStatus(true);
//                       setStoneDisplayStatus(false);
//                     }}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <div>
//                     <h2>
//                       {firstStudDiamond.carat} Carat{" "}
//                       {firstStudDiamond.clarity}{" "}
//                       {firstStudDiamond.diamondShape} Natural Diamond
//                     </h2>
//                     <h2>
//                       {customStud.metalWeight} Gms 18KT Gold{" "}
//                       {customStud.studName} Stud
//                     </h2>
//                   </div>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice("custom-stud", customStud, cookies) +
//                       getTotalPrice(
//                         "loose-diamond",
//                         firstStudDiamond,
//                         cookies
//                       ) +
//                       getTotalPrice(
//                         "loose-diamond",
//                         secondStudDiamond,
//                         cookies
//                       )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Diamond not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : product.itemType === "loose-gemstone" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Loose Gemstone
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src={gemstone.images[0]}
//                     alt="gemstone"
//                     id={product.gemstoneId}
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>{gemstone.type}</h2>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {parseInt(
//                       (gemstone.priceDetails[product.weightIndex].price +
//                         gemCertification[product.certificateIndex].price) *
//                         cookies.exchangeRate[cookies.currencyCode]
//                     )}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Gemstone not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         ):

//         product.itemType === "gem-ring" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Custom Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     className='stone-image'
//                     src={gemstone.images[0]}
//                     alt='gemstone' id={gemstone.stockNumber}
//                     onClick={() => {
//                       setJewelryDisplayStatus(false);
//                       setStoneDisplayStatus(true);
//                     }}
//                     />
//                   <img
//                     className='jewelry-image'
//                     src={gemRing.ring}
//                     onClick={() =>{
//                       setJewelryDisplayStatus(true);
//                       setStoneDisplayStatus(false);
//                     }} />
//                 </div>
//                 <div className="details-holder">
//                   <div>
//                     <h2>
//                       {(gemstone.type).toLowerCase()}
//                     </h2>
//                     <h2>
//                       {getGemSettingMetalName(product.ringMetal)} Ring
//                     </h2>
//                   </div>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice('gem-ring', null, cookies, null, null, product.ringMetal) +
//                      getTotalPrice('loose-gemstone', gemstone, cookies, null, null, product.gemstoneWeight, null, product.gemstoneCertification)}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Gem ring not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         )

//         :

//         product.itemType === "gem-pendant" ? (
//           <div className="item">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingBottom: "10px",
//                 borderBottom: "1px solid rgba(30,46,76,0.3)",
//                 marginBottom: "10px",
//               }}
//             >
//               <p className="category">
//                 <span style={{ fontWeight: "bold", fontStyle: "none" }}>
//                   Category:
//                 </span>{" "}
//                 Custom Jewelry
//               </p>
//               <div className="buttons-container">
//
//
//                 <p onClick={() => remove(product)}>Remove</p>
//               </div>
//             </div>
//             {!isAllSet ? (
//               <img
//                 src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             ) : isObjectEmpty ? (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     className='stone-image'
//                     src={gemstone.images[0]}
//                     alt='gemstone' id={gemstone.stockNumber}
//                     onClick={() => {
//                       setJewelryDisplayStatus(false);
//                       setStoneDisplayStatus(true);
//                     }}
//                     />
//                   <img
//                     className='jewelry-image'
//                     src={gemPendant.pendant}
//                     onClick={() =>{
//                       setJewelryDisplayStatus(true);
//                       setStoneDisplayStatus(false);
//                     }} />
//                 </div>
//                 <div className="details-holder">
//                   <div>
//                     <h2>
//                       {(gemstone.type).toLowerCase()}
//                     </h2>
//                     <h2>
//                       {getGemSettingMetalName(product.pendantMetal)} Pendant
//                     </h2>
//                   </div>
//                   <p className="item-price">
//                     Price: {cookies.currencyCode}{" "}
//                     {getTotalPrice('gem-pendant', null, cookies, null, null, product.pendantMetal) +
//                      getTotalPrice('loose-gemstone', gemstone, cookies, null, null, product.gemstoneWeight, null, product.gemstoneCertification)}{" "}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div className="item-holder">
//                 <div className="image-holder">
//                   <img
//                     src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg"
//                     alt="diamond"
//                   />
//                 </div>
//                 <div className="details-holder">
//                   <h2>Gem pendant not available</h2>
//                 </div>
//               </div>
//             )}
//           </div>
//         )

//         : (
//           <div></div>
//         )}
//       </CartItemBox>
//     );
// }

// export default CartItem;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { CartItemBox } from "./style";
import { useCookies } from "react-cookie";
import getTotalPrice from "../../../helper/getTotalPrice";
import getNewArrivalsTotalPrice from "../../../helper/getNewArrivalsTotalPrice";
import gemCertification from "../../../fakedata/gemCertification";
import { useSelector, useDispatch } from "react-redux";
import { letsShowFlash } from "../../../store/actions/flashAction";

const CartItem = ({
  cartItems,
  itemCount,
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
  removeItem,
  nfObject,
  isAllSet,
}) => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
  const [stoneDisplayStatus, setStoneDisplayStatus] = useState(true);
  const [jewelryDisplayStatus, setJewelryDisplayStatus] = useState(false);
  const [isObjectEmpty, setIsObjectEmpty] = useState(false);

  let diamond = findDiamond(unfilteredDiamondArray, product.diamondId);
  let fashionRing = findJewelry(unfilteredFashionRingsArray, product.ringId);
  let diamondPendant = findJewelry(
    unfilteredDiamondPendantsArray,
    product.pendantId
  );
  let diamondEarring = findJewelry(
    unfilteredDiamondEarringsArray,
    product.earringId
  );
  let alphabetPendant = findJewelry(
    unfilteredAlphabetPendantsArray,
    product.pendantId
  );
  let nosePin = findJewelry(unfilteredNosePinsArray, product.pinId);
  let mensRing = findJewelry(unfilteredMensRingsArray, product.ringId);
  let mensChain = findJewelry(unfilteredMensChainsArray, product.chainId);
  let mensKada = findJewelry(unfilteredMensKadasArray, product.kadaId);
  let mensBracelet = findJewelry(
    unfilteredMensBraceletsArray,
    product.braceletId
  );
  let mensStud = findJewelry(unfilteredSolitaireStudsArray, product.studId);
  let gemstone = findJewelry(unfilteredGemstonesArray, product.gemstoneId);
  let gemRing = findJewelry(unfilteredGemstonesRingsArray, product.ringId);
  let gemPendant = findJewelry(
    unfilteredGemstonesPendantsArray,
    product.pendantId
  );
  let customRing = findJewelry(unfilteredSolitaireRingsArray, product.ringId);
  let customNecklace = findJewelry(
    unfilteredSolitaireNecklacesArray,
    product.necklaceId
  );
  let customStud = findJewelry(unfilteredSolitaireStudsArray, product.studId);
  let presetRing = findJewelry(unfilteredSolitaireRingsArray, product.ringId);
  let presetNecklace = findJewelry(
    unfilteredSolitaireNecklacesArray,
    product.necklaceId
  );
  let presetStud = findJewelry(unfilteredSolitaireStudsArray, product.studId);
  let firstStudDiamond = findDiamond(
    unfilteredDiamondArray,
    product.firstDiamondId
  );
  let secondStudDiamond = findDiamond(
    unfilteredDiamondArray,
    product.secondDiamondId
  );

  const remove = (product) => {
    dispatch(removeItem({ id: product.itemId }));
    dispatch(letsShowFlash("Item Removed From The Cart"));
  };

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
      default:
        return {
          shape: "Round",
          imgURL:
            "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-sample-images/round.jpg",
        };
        break;
    }
  };

  const getGemSettingMetalName = (metalCode) => {
    switch (metalCode) {
      case 0:
        return "Silver";
        break;
      case 1:
        return "Panchdhatu";
        break;
      case 2:
        return "22K Yellow Gold";
        break;
      case 3:
        return "18K Yellow Gold";
        break;
      case 4:
        return "18K White Gold";
        break;
      case 5:
        return "Platinum 950";
        break;
      default:
        return "Silver";
        break;
    }
  };

  return (
    <CartItemBox
      jewelryImageStatus={jewelryDisplayStatus}
      stoneImageStatus={stoneDisplayStatus}
    >
      {product.itemType === "loose-diamond" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Loose Diamond
            </p>
            <div className="buttons-container">
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : (
            <div>
              {diamond ? (
                <div className="item-holder">
                  <div className="image-holder">
                    <img
                      src={
                        diamond.imageUrl.length > 5
                          ? diamond.imageUrl
                          : getSampleDiamondImage(diamond.diamondShape).imgURL
                      }
                      alt="diamond"
                      id={product.diamondId}
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
                      {diamond.carat} Carat {diamond.clarity}{" "}
                      {getSampleDiamondImage(diamond.diamondShape).shape}{" "}
                      Natural Diamond
                    </h2>
                    <p className="item-price">
                      Price: {cookies.currencyCode}{" "}
                      {getTotalPrice("loose-diamond", diamond, cookies)}
                    </p>
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
          )}
        </div>
      ) : product.itemType === "custom-ring" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Custom Jewelry
            </p>
            <div className="buttons-container">
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : customRing ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  className="stone-image"
                  src={
                    diamond.imageUrl.length > 5
                      ? diamond.imageUrl
                      : getSampleDiamondImage(diamond.shape).imgURL
                  }
                  alt="diamond"
                  id={product.diamondId}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getSampleDiamondImage(diamond.shape).imgURL;
                  }}
                  onClick={() => {
                    setJewelryDisplayStatus(false);
                    setStoneDisplayStatus(true);
                  }}
                />

                <img
                  className="jewelry-image"
                  src={customRing.metals[0].imgURL}
                  alt="ring"
                  id={product.ringId}
                  onClick={() => {
                    setJewelryDisplayStatus(true);
                    setStoneDisplayStatus(false);
                  }}
                />
              </div>
              <div className="details-holder">
                <div>
                  <h2>
                    {diamond.carat} Carat {diamond.clarity}{" "}
                    {diamond.diamondShape} Natural Diamond
                  </h2>
                  <h2>
                    {customRing.metalWeight} Gms 18KT Gold {customRing.ringName}{" "}
                    Ring
                  </h2>
                </div>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice("custom-ring", customRing, cookies) +
                    getTotalPrice("loose-diamond", diamond, cookies)}{" "}
                </p>
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
      ) : product.itemType === "preset-ring" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>
          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : presetRing ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  src={presetRing.metals[product.metalCode].imgURL}
                  alt="ring"
                  id={product.ringId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {presetRing.metalWeight} Gms 18KT Gold {presetRing.ringName}{" "}
                  Ring
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "preset-ring",
                    presetRing,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality
                  )}{" "}
                </p>
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
      ) : product.itemType === "custom-necklace" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Custom Jewelry
            </p>
            <div className="buttons-container">
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>

          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : customNecklace ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  className="stone-image"
                  src={
                    diamond.imageUrl.length > 5
                      ? diamond.imageUrl
                      : getSampleDiamondImage(diamond.shape).imgURL
                  }
                  alt="diamond"
                  id={product.diamondId}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getSampleDiamondImage(diamond.shape).imgURL;
                  }}
                  onClick={() => {
                    setJewelryDisplayStatus(false);
                    setStoneDisplayStatus(true);
                  }}
                />

                <img
                  className="jewelry-image"
                  src={customNecklace.metals[0].imgURL}
                  alt="necklace"
                  id={product.necklaceId}
                  onClick={() => {
                    setJewelryDisplayStatus(true);
                    setStoneDisplayStatus(false);
                  }}
                />
              </div>
              <div className="details-holder">
                <div>
                  <h2>
                    {diamond.carat} Carat {diamond.clarity}{" "}
                    {diamond.diamondShape} Natural Diamond
                  </h2>
                  <h2>
                    {customNecklace.metalWeight} Gms 18KT Gold{" "}
                    {customNecklace.necklaceName} Necklace
                  </h2>
                </div>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice("custom-necklace", customNecklace, cookies) +
                    getTotalPrice("loose-diamond", diamond, cookies)}{" "}
                </p>
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
      ) : product.itemType === "preset-necklace" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.necklaceId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {presetNecklace.metalWeight} Gms 18KT Gold{" "}
                  {presetNecklace.necklaceName} Necklace
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "preset-necklace",
                    presetNecklace,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
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
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "mens-ring",
                    mensRing,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality,
                    product.weightIndex
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Preset Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.studId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {presetStud.metalWeight} Gms 18KT Gold {presetStud.studName}{" "}
                  Stud
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "preset-stud",
                    presetStud,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality,
                    null,
                    product.studQuantity
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
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
                  src={mensStud.metals[product.metalCode].imgURL}
                  alt="mens-ring"
                  id={product.studId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {mensStud.metalWeight} Gms 18KT Gold {mensStud.studName} Stud
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "preset-stud",
                    mensStud,
                    cookies,
                    product.presetDiamondCarat,
                    product.presetDiamondQuality,
                    null,
                    product.studQuantity
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.kadaId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {mensKada.weight} 18KT Gold {mensKada.kadaName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "mens-kada",
                    mensKada,
                    cookies,
                    null,
                    null,
                    product.weightIndex
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.chainId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {mensChain.weight} 22KT {mensChain.chainName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "gold-chain",
                    mensChain,
                    cookies,
                    null,
                    null,
                    product.weightIndex
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Mens Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.braceletId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {mensBracelet.weight} 22KT {mensBracelet.braceletName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "mens-bracelet",
                    mensBracelet,
                    cookies,
                    null,
                    null,
                    product.weightIndex
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.earringId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {diamondEarring.metalWeight} 22KT {diamondEarring.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "diamond-earring",
                    product.weight,
                    cookies,
                    product.smallDiamondPrice,
                    product.solitaireDiamondPrice
                  )}{" "}
                </p>
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
      ) : product.itemType === "diamond-pendant" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.pendantId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {diamondPendant.metalWeight} 22KT {diamondPendant.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "diamond-pendant",
                    product.weight,
                    cookies,
                    product.smallDiamondPrice,
                    product.solitaireDiamondPrice
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.pendantId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {alphabetPendant.metalWeight} 22KT{" "}
                  {alphabetPendant.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "alphabet-pendant",
                    product.weight,
                    cookies,
                    product.smallDiamondPrice
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.ringId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {fashionRing.ringSizeWeightArray[product.weightIndex]} 22KT{" "}
                  {fashionRing.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "fashion-ring",
                    fashionRing.ringSizeWeightArray[product.weightIndex],
                    cookies,
                    product.smallDiamondPrice,
                    product.solitaireDiamondPrice,
                    fashionRing
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Women Jewelry
            </p>
            <div className="buttons-container">
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
                  id={product.pinId}
                />
              </div>
              <div className="details-holder">
                <h2>
                  {nosePin.metalWeight} 22KT {nosePin.productName}
                </h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getNewArrivalsTotalPrice(
                    "nose-pin",
                    nosePin.metalWeight,
                    cookies,
                    product.smallDiamondPrice
                  )}{" "}
                </p>
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
      ) : product.itemType === "custom-stud" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Custom Jewelry
            </p>
            <div className="buttons-container">
              <p onClick={() => remove(product)}>Remove</p>
            </div>
          </div>

          {!isAllSet ? (
            <img
              src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif"
              style={{ width: "30px", height: "30px" }}
            />
          ) : customStud ? (
            <div className="item-holder">
              <div className="image-holder">
                <img
                  className="stone-image"
                  src={
                    firstStudDiamond.imageUrl.length > 5
                      ? firstStudDiamond.imageUrl
                      : getSampleDiamondImage(firstStudDiamond.shape).imgURL
                  }
                  alt="diamond"
                  id={product.firstDiamondForStud}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getSampleDiamondImage(
                      firstStudDiamond.shape
                    ).imgURL;
                  }}
                  onClick={() => {
                    setJewelryDisplayStatus(false);
                    setStoneDisplayStatus(true);
                  }}
                />

                <img
                  className="jewelry-image"
                  src={customStud.metals[0].imgURL}
                  alt="stud"
                  id={product.studId}
                  onClick={() => {
                    setJewelryDisplayStatus(true);
                    setStoneDisplayStatus(false);
                  }}
                />
              </div>
              <div className="details-holder">
                <div>
                  <h2>
                    {firstStudDiamond.carat} Carat {firstStudDiamond.clarity}{" "}
                    {firstStudDiamond.diamondShape} Natural Diamond
                  </h2>
                  <h2>
                    {customStud.metalWeight} Gms 18KT Gold {customStud.studName}{" "}
                    Stud
                  </h2>
                </div>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice("custom-stud", customStud, cookies) +
                    getTotalPrice("loose-diamond", firstStudDiamond, cookies) +
                    getTotalPrice(
                      "loose-diamond",
                      secondStudDiamond,
                      cookies
                    )}{" "}
                </p>
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
      ) : product.itemType === "loose-gemstone" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Loose Gemstone
            </p>
            <div className="buttons-container">
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
                  id={product.gemstoneId}
                />
              </div>
              <div className="details-holder">
                <h2>{gemstone.type}</h2>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {parseInt(
                    (gemstone.priceDetails[product.weightIndex].price +
                      gemCertification[product.certificateIndex].price) *
                      cookies.exchangeRate[cookies.currencyCode]
                  )}{" "}
                </p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Custom Jewelry
            </p>
            <div className="buttons-container">
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
                <img
                  className="stone-image"
                  src={gemstone.images[0]}
                  alt="gemstone"
                  id={gemstone.stockNumber}
                  onClick={() => {
                    setJewelryDisplayStatus(false);
                    setStoneDisplayStatus(true);
                  }}
                />
                <img
                  className="jewelry-image"
                  src={gemRing.ring}
                  onClick={() => {
                    setJewelryDisplayStatus(true);
                    setStoneDisplayStatus(false);
                  }}
                />
              </div>
              <div className="details-holder">
                <div>
                  <h2>{gemstone.type.toLowerCase()}</h2>
                  <h2>{getGemSettingMetalName(product.ringMetal)} Ring</h2>
                </div>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "gem-ring",
                    null,
                    cookies,
                    null,
                    null,
                    product.ringMetal
                  ) +
                    getTotalPrice(
                      "loose-gemstone",
                      gemstone,
                      cookies,
                      null,
                      null,
                      product.gemstoneWeight,
                      null,
                      product.gemstoneCertification
                    )}{" "}
                </p>
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
                <h2>Gem ring not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : product.itemType === "gem-pendant" ? (
        <div className="item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(30,46,76,0.3)",
              marginBottom: "10px",
            }}
          >
            <p className="category">
              <span style={{ fontWeight: "bold", fontStyle: "none" }}>
                Category:
              </span>{" "}
              Custom Jewelry
            </p>
            <div className="buttons-container">
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
                <img
                  className="stone-image"
                  src={gemstone.images[0]}
                  alt="gemstone"
                  id={gemstone.stockNumber}
                  onClick={() => {
                    setJewelryDisplayStatus(false);
                    setStoneDisplayStatus(true);
                  }}
                />
                <img
                  className="jewelry-image"
                  src={gemPendant.pendant}
                  onClick={() => {
                    setJewelryDisplayStatus(true);
                    setStoneDisplayStatus(false);
                  }}
                />
              </div>
              <div className="details-holder">
                <div>
                  <h2>{gemstone.type.toLowerCase()}</h2>
                  <h2>
                    {getGemSettingMetalName(product.pendantMetal)} Pendant
                  </h2>
                </div>
                <p className="item-price">
                  Price: {cookies.currencyCode}{" "}
                  {getTotalPrice(
                    "gem-pendant",
                    null,
                    cookies,
                    null,
                    null,
                    product.pendantMetal
                  ) +
                    getTotalPrice(
                      "loose-gemstone",
                      gemstone,
                      cookies,
                      null,
                      null,
                      product.gemstoneWeight,
                      null,
                      product.gemstoneCertification
                    )}{" "}
                </p>
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
                <h2>Gem pendant not available</h2>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </CartItemBox>
  );
};

export default CartItem;
