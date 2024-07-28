import getTotalPrice from './getTotalPrice'
import getNewArrivalsTotalPrice from './getNewArrivalsTotalPrice'

const findCartTotalPrice = (
  cartItems,
  unfilteredDiamondArray,
  unfilteredSolitaireRingsArray,
  unfilteredSolitaireNecklacesArray,
  unfilteredSolitaireStudsArray,
  unfilteredMensRingsArray,
  unfilteredMensStudsArray,
  unfilteredMensKadasArray,
  unfilteredMensChainsArray,
  unfilteredMensBraceletsArray,
  unfilteredDiamondEarringsArray,
  unfilteredDiamondPendantsArray,
  unfilteredAlphabetPendantsArray,
  unfilteredFashionRingsArray,
  unfilteredNosePinsArray,
  unfilteredGemstonesArray,
  unfilteredGemstonesRingsArray,
  unfilteredGemstonesPendantsArray,
  findDiamond,
  findJewelry,
  cookies
) => {
  let cartTotal = 0;

  cartItems.map((item, index) => {
    switch (item.itemType) {
      case "loose-diamond":
        if (unfilteredDiamondArray.length !== 0) {
          let diamondObject = findDiamond(unfilteredDiamondArray, item.diamondId);
          if (diamondObject){
            cartTotal =
            cartTotal + getTotalPrice("loose-diamond", diamondObject, cookies);
          }
        }
        break;
      case "custom-ring":
        if (unfilteredDiamondArray.length !== 0) {
          let ringObject = findJewelry(unfilteredSolitaireRingsArray, item.ringId);
          
          let diamondObject = findDiamond(unfilteredDiamondArray, item.diamondId);

          if (ringObject && diamondObject){
            cartTotal =
            cartTotal +
            getTotalPrice("custom-ring", ringObject, cookies) +
            getTotalPrice("loose-diamond", diamondObject, cookies);
          }
        }
        break;
      case "preset-ring":
        let ringObject = findJewelry(unfilteredSolitaireRingsArray, item.ringId);
        if(ringObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "preset-ring",
            ringObject,
            cookies,
            item.presetDiamondCarat,
            item.presetDiamondQuality
          );
        }
        break;
      case "custom-necklace":
        if (unfilteredDiamondArray.length !== 0) {
          let necklaceObject = findJewelry(unfilteredSolitaireNecklacesArray, item.necklaceId);
          let diamondObject = findDiamond(unfilteredDiamondArray, item.diamondId);
          if (necklaceObject && diamondObject){
            cartTotal =
            cartTotal +
            getTotalPrice("custom-necklace", necklaceObject, cookies) +
            getTotalPrice("loose-diamond", diamondObject, cookies);
          }
        }
        break;
      case "preset-necklace":
        let necklaceObject = findJewelry(unfilteredSolitaireNecklacesArray, item.necklaceId);
        if (necklaceObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "preset-necklace",
            necklaceObject,
            cookies,
            item.presetDiamondCarat,
            item.presetDiamondQuality
          );
        }
        break;
      case "custom-stud":
        if (unfilteredDiamondArray.length !== 0) {
          let studObject = findJewelry(unfilteredSolitaireStudsArray, item.studId);
          let firstDiamondObject = findDiamond(
            unfilteredDiamondArray,
            item.firstDiamondId
          );
          let secondDiamondObject = findDiamond(
            unfilteredDiamondArray,
            item.secondDiamondId
          );
          if (firstDiamondObject && secondDiamondObject){
            cartTotal =
            cartTotal +
            getTotalPrice("custom-stud", studObject, cookies) +
            getTotalPrice("loose-diamond", firstDiamondObject, cookies) +
            getTotalPrice("loose-diamond", secondDiamondObject, cookies);
          }
        }
        break;
      case "preset-stud":
        let studObject = findJewelry(unfilteredSolitaireStudsArray, item.studId);
        if (studObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "preset-stud",
            studObject,
            cookies,
            item.presetDiamondCarat,
            item.presetDiamondQuality,
            null,
            item.studQuantity
          );
        }
        break;
      case "mens-stud":
        let mensStudObject = findJewelry(unfilteredSolitaireStudsArray, item.studId);
        if (mensStudObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "preset-stud",
            mensStudObject,
            cookies,
            item.presetDiamondCarat,
            item.presetDiamondQuality,
            null,
            item.studQuantity
          );
        }
        break;
      case "mens-ring":
        let mensRingObject = findJewelry(unfilteredMensRingsArray, item.ringId);
        if (mensRingObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "mens-ring",
            mensRingObject,
            cookies,
            item.presetDiamondCarat,
            item.presetDiamondQuality,
            item.weightIndex
          );
        }
        break;
      case "mens-kada":
        let kadaObject = findJewelry(unfilteredMensKadasArray, item.kadaId);
        if (kadaObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "mens-kada",
            kadaObject,
            cookies,
            null,
            null,
            item.weightIndex
          );
        }
        break;
      case "gold-chain":
        let chainObject = findJewelry(unfilteredMensChainsArray, item.chainId);
        if (chainObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "gold-chain",
            chainObject,
            cookies,
            null,
            null,
            item.weightIndex
          );
        }
        break;
      case "mens-bracelet":
        let braceletObject = findJewelry(unfilteredMensBraceletsArray, item.braceletId);
        if (braceletObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "mens-bracelet",
            braceletObject,
            cookies,
            null,
            null,
            item.weightIndex
          );
        }
        break;
      case "diamond-earring":
        let diamondEarringObject = findJewelry(
            unfilteredDiamondEarringsArray,
          item.earringId
        );
        if (diamondEarringObject){
          cartTotal =
          cartTotal +
          getNewArrivalsTotalPrice(
            "diamond-earring",
            item.weight,
            cookies,
            item.smallDiamondPrice,
            item.solitaireDiamondPrice
          );
        }
        break;
      case "diamond-pendant":
        let diamondPendantObject = findJewelry(
            unfilteredDiamondPendantsArray,
          item.pendantId
        );
        if (diamondPendantObject){
          cartTotal =
          cartTotal +
          getNewArrivalsTotalPrice(
            "diamond-pendant",
            item.weight,
            cookies,
            item.smallDiamondPrice,
            item.solitaireDiamondPrice
          );
        }
        break;
      case "alphabet-pendant":
        let alphabetPendantObject = findJewelry(
          unfilteredAlphabetPendantsArray,
          item.pendantId
        );
        if (alphabetPendantObject){
          cartTotal =
          cartTotal +
          getNewArrivalsTotalPrice(
            "alphabet-pendant",
            item.weight,
            cookies,
            item.smallDiamondPrice
          );
        }
        break;
      case "fashion-ring":
        let fashionRingObject = findJewelry(unfilteredFashionRingsArray, item.ringId);
        if (fashionRingObject){
          cartTotal =
          cartTotal +
          getNewArrivalsTotalPrice(
            "fashion-ring",
            fashionRingObject.ringSizeWeightArray[item.weightIndex],
            cookies,
            item.smallDiamondPrice,
            item.solitaireDiamondPrice,
            fashionRingObject
          );
        }
        break;
      case "nose-pin":
        let nosePinObject = findJewelry(unfilteredNosePinsArray, item.pinId);
        if (nosePinObject){
          cartTotal =
            cartTotal +
            getNewArrivalsTotalPrice(
              "nose-pin",
              nosePinObject.metalWeight,
              cookies,
              item.smallDiamondPrice
            );
        }
        break;
      case "loose-gemstone":
        let gemstoneObject = findJewelry(unfilteredGemstonesArray, item.gemstoneId);
        if (gemstoneObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "loose-gemstone",
            gemstoneObject,
            cookies,
            null,
            null,
            item.weightIndex,
            null,
            item.certificateIndex
          );
        }
        break;
      case 'gem-ring':
        let gemstoneForRingObject = findJewelry(unfilteredGemstonesArray, item.gemstoneId);
        let ringForRingObject = findJewelry(unfilteredGemstonesRingsArray, item.ringId);
        if (gemstoneForRingObject && ringForRingObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "loose-gemstone",
            gemstoneForRingObject,
            cookies,
            null,
            null,
            item.gemstoneWeight,
            null,
            item.gemstoneCertification
          ) + getTotalPrice('gem-ring', null, cookies, null, null, item.ringMetal, null)
        } 
        break;
      case 'gem-pendant':
        let gemstoneForPendantObject = findJewelry(unfilteredGemstonesArray, item.gemstoneId);
        let pendantForPendantObject = findJewelry(unfilteredGemstonesPendantsArray, item.pendantId);
        if (gemstoneForPendantObject && pendantForPendantObject){
          cartTotal =
          cartTotal +
          getTotalPrice(
            "loose-gemstone",
            gemstoneForPendantObject,
            cookies,
            null,
            null,
            item.gemstoneWeight,
            null,
            item.gemstoneCertification
          ) + getTotalPrice('gem-pendant', null, cookies, null, null, item.pendantMetal, null)
        } 
        break;
      default:
        cartTotal = cartTotal + 0;
        break;
    }
  });

  return cartTotal;
};

export default findCartTotalPrice