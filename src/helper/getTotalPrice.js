import gemCertification from "../fakedata/gemCertification"
import { gemstoneJewelrySettingCharges } from "../fakedata/chargesData"

const getPresetEarringPrice = (carat, quality) => {
    switch (carat) {
        case '0.3':
            if (quality === 'IJSI'){
                return 350
            }
            else if (quality === 'GHVS'){
                return 450
            }
            break;
        case '0.5':
            if (quality === 'IJSI'){
                return 850
            }
            else if (quality === 'GHVS'){
                return 1250
            }
            break;
        case '0.7':
            if (quality === 'IJSI'){
                return 1650
            }
            else if (quality === 'GHVS'){
                return 2350
            }
            break;
        case '1':
            if (quality === 'IJSI'){
                return 4150
            }
            else if (quality === 'GHVS'){
                return 6350
            }
            break;
        case '2':
            if (quality === 'IJSI'){
                return 13150
            }
            else if (quality === 'GHVS'){
                return 20800
            }
            break;
    }
}

const getSmallDiamondPrice = (item, quality) => {

    let diamondPrice = 0
    
    switch (quality) {
        case 'IJSI':
            return item.solitaireDiamondsArray.map((object, index) => diamondPrice = diamondPrice + object.IJSI)[0]
            break;
        case 'GHVS':
            return item.solitaireDiamondsArray.map((object, index) => diamondPrice = diamondPrice + object.GHVS)[0]
            break;
    }

}

const getSolitaireDiamondPrice = (item, quality) => {

    let solitaireDiamondPrice = 0
    
    switch (quality) {
        case 'IJSI':
            return item.smallDiamondsArray.map((object, index) => solitaireDiamondPrice = solitaireDiamondPrice + object.IJSI)[0]
            break;
    
        case 'GHVS':
            return item.smallDiamondsArray.map((object, index) => solitaireDiamondPrice = solitaireDiamondPrice + object.GHVS)[0]
            break;
    }  
}

const newArrivalsJewelryDiamondPrice = (item, presetQuality) => {
   
     return getSmallDiamondPrice(item, presetQuality.diamondQuality) + getSolitaireDiamondPrice(item, presetQuality.solitaireDiamondQuality)
}

const getPresetDiamondPrice = (carat, quality) => {
   
    switch (carat) {
         case '0.3':
             if (quality === 'IJSI'){
                 return 330
             }
             else if (quality === 'GHVS'){
                 return 440
             }
             break;
        case '0.4':
             if (quality === 'IJSI'){
                 return 660
             }
             else if (quality === 'GHVS'){
                 return 990
             }
             break;
         case '0.5':
             if (quality === 'IJSI'){
                 return 820
             }
             else if (quality === 'GHVS'){
                 return 1230
             }
             break;
         case '0.7':
             if (quality === 'IJSI'){
                 return 1650
             }
             else if (quality === 'GHVS'){
                 return 2330
             }
             break;
         case '0.9':
             if (quality === 'IJSI'){
                 return 2010
             }
             else if (quality === 'GHVS'){
                 return 2810
             }
             break;
         case '1':
             if (quality === 'IJSI'){
                 return 4110
             }
             else if (quality === 'GHVS'){
                 return 6300
             }
             break;
         case '1.5':
                if (quality === 'IJSI'){
                    return 7026
                }
                else if (quality === 'GHVS'){
                    return 8415
                }
                break;
         case '2':
             if (quality === 'IJSI'){
                 return 13010
             }
             else if (quality === 'GHVS'){
                 return 20550
             }
             break;
         default:
             break;
     }
 }

const getTotalPrice = (itemType, item, cookies, presetCarat, presetQuality, weightIndex, quantity, certificationIndex) => {

    const currencyMultiplier = cookies.exchangeRate[cookies.currencyCode]

    switch (itemType) {
        case "loose-diamond":
            if (cookies.currencyCode === 'INR'){
                return parseInt(((item ? item.totalPrice * (currencyMultiplier) : 0) + 1) * 1.15)
            }
            else{
                return parseInt(((item ? item.totalPrice * (currencyMultiplier) : 0) + 1) * 1.30)
            }
            break;
        case "custom-ring":
            if (cookies.currencyCode === 'INR'){
                return parseInt((item.ringPrice * (currencyMultiplier)) + 1)        
            }
            else{
                return parseInt(((item.ringPrice * (currencyMultiplier)) + 1 )  * 1.30)
            }
            break;
        case "custom-necklace":
            if (cookies.currencyCode === 'INR'){
                return parseInt((450 * (currencyMultiplier)))
            }
            else{
                return parseInt((450 * (currencyMultiplier))  * 1.30)
            }
            break;
        case "custom-stud":
            if (cookies.currencyCode === 'INR'){
                return parseInt((350 * 2 * (currencyMultiplier)))
            }
            else{
                return parseInt((350 * 2 * (currencyMultiplier)) * 1.30)
            }
            break;
        case "preset-ring":
            if (cookies.currencyCode === 'INR'){
                return parseInt((((item.metalWeight * 13) + (item.metalWeight * cookies.goldPrice['18KT']) + getPresetDiamondPrice(presetCarat, presetQuality)) * (currencyMultiplier)) + 1)
            }
            else{
                return parseInt((((item.ringPrice + getPresetDiamondPrice(presetCarat, presetQuality)) * (currencyMultiplier)) + 1) * 1.30)
            }
            break;
        case "preset-necklace":
            if (cookies.currencyCode === 'INR'){
                return parseInt((((item.metalWeight * 13) + (item.metalWeight * cookies.goldPrice['18KT']) + getPresetDiamondPrice(presetCarat, presetQuality)) * (currencyMultiplier)) + 1)
            }
            else{
                return parseInt(((( 450 + getPresetDiamondPrice(presetCarat, presetQuality)) * (currencyMultiplier)) + 1) * 1.30)
            }
            break;
        case "preset-stud":
            if (cookies.currencyCode === 'INR'){
                return parseInt(quantity * (((item.metalWeight * 13) + (item.metalWeight * cookies.goldPrice['18KT']) + getPresetDiamondPrice(presetCarat, presetQuality)) * (currencyMultiplier)) + 1)
            }
            else{
                return parseInt((quantity * ((getPresetEarringPrice(presetCarat, presetQuality) + getPresetDiamondPrice(presetCarat, presetQuality)) * (currencyMultiplier)) + 1) * 1.30)
            }
            break;
        case "mens-ring":
            if (cookies.currencyCode === 'INR'){
                return parseInt((((item.metalWeightArray[weightIndex] * 11) + (item.metalWeightArray[weightIndex] * cookies.goldPrice['18KT']) + getPresetDiamondPrice(presetCarat, presetQuality)) * (currencyMultiplier)) + 1)
            }
            else{
                return parseInt(((((item.metalWeightArray[weightIndex] * 11) + (item.metalWeightArray[weightIndex] * cookies.goldPrice['18KT']) + getPresetDiamondPrice(presetCarat, presetQuality)) * (currencyMultiplier)) + 1) * 1.30)
            }
            break;
        case "mens-kada":
            if (cookies.currencyCode === 'INR'){
                return parseInt((((item.metalWeightArray[weightIndex] * 11) + (item.metalWeightArray[weightIndex] * cookies.goldPrice['22KT'])) * (currencyMultiplier)) + 1)
            }
            else{
                return parseInt(((((item.metalWeightArray[weightIndex] * 11) + (item.metalWeightArray[weightIndex] * cookies.goldPrice['22KT'])) * (currencyMultiplier)) + 1) * 1.30)
            }
            break;
        case "mens-bracelet":
            if (cookies.currencyCode === 'INR'){
                return parseInt((((item.metalWeightArray[weightIndex] * 11) + (item.metalWeightArray[weightIndex] * cookies.goldPrice['22KT'])) * (currencyMultiplier)) + 1)
            }
            else{
                return parseInt(((((item.metalWeightArray[weightIndex] * 11) + (item.metalWeightArray[weightIndex] * cookies.goldPrice['22KT'])) * (currencyMultiplier)) + 1) * 1.30)
            }
            break;
        case "gold-chain":
            if (cookies.currencyCode === 'INR'){
                return parseInt((((item.metalWeightArray[weightIndex] * 11) + (item.metalWeightArray[weightIndex] * cookies.goldPrice['22KT'])) * (currencyMultiplier)) + 1)
            }
            else{
                return parseInt(((((item.metalWeightArray[weightIndex] * 11) + (item.metalWeightArray[weightIndex] * cookies.goldPrice['22KT'])) * (currencyMultiplier)) + 1) * 1.30)
            }
            break;
        case "loose-gemstone":
            if (cookies.currencyCode === 'INR'){
                return parseInt(((item.priceDetails[weightIndex].price + gemCertification[certificationIndex].price) * cookies.exchangeRate[cookies.currencyCode]))
            }
            else{
                return parseInt(((item.priceDetails[weightIndex].price + gemCertification[certificationIndex].price) * cookies.exchangeRate[cookies.currencyCode]))
            }
            break;
        case "engagement-ring":
            if (cookies.currencyCode === 'INR'){
                return parseInt((((item.ringSizeWeightArray[weightIndex] * 11) + (item.ringSizeWeightArray[weightIndex] * cookies.goldPrice['18KT']) + newArrivalsJewelryDiamondPrice(item, presetQuality)) * (currencyMultiplier)) + 1)
            }
            else{
                return parseInt(((((item.ringSizeWeightArray[weightIndex] * 11) + (item.ringSizeWeightArray[weightIndex] * cookies.goldPrice['18KT']) + newArrivalsJewelryDiamondPrice(item, presetQuality)) * (currencyMultiplier)) + 1) * 1.30)
            }
            break;
        case "gem-ring":
            if (cookies.currencyCode === "INR"){
                return parseInt(gemstoneJewelrySettingCharges[weightIndex].price * cookies.exchangeRate[cookies.currencyCode])
            }
            else{
                return parseInt((gemstoneJewelrySettingCharges[weightIndex].price * cookies.exchangeRate[cookies.currencyCode]) * 1.30)
            }
            break;
        case "gem-pendant":
            if (cookies.currencyCode === "INR"){
                return parseInt(gemstoneJewelrySettingCharges[weightIndex].price * cookies.exchangeRate[cookies.currencyCode])
            }
            else{
                return parseInt((gemstoneJewelrySettingCharges[weightIndex].price * cookies.exchangeRate[cookies.currencyCode]) * 1.30)
            }
            break;
        default:
            break;
    }
}

export default getTotalPrice