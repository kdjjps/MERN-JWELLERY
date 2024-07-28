const getFromAmount = (item, itemType, cookies) => {

    const currencyMultiplier = cookies.exchangeRate[cookies.currencyCode]

    switch (itemType) {
        case 'preset-ring':
            if (cookies.currencyCode === 'INR' ){
                return parseInt((item.metalWeight * 13 + item.metalWeight * cookies.goldPrice['18KT'] + 330 )  * currencyMultiplier)
            }
            else{
                return parseInt((item.ringPrice + 330) * currencyMultiplier)
            }
            break;
        case 'preset-pendant':
            if (cookies.currencyCode === 'INR' ){
                return parseInt(((item.metalWeight * 13) + item.metalWeight * cookies.goldPrice['18KT'] + 330 )  * currencyMultiplier)
            }
            else{
                return parseInt((450 + 330) * currencyMultiplier)
            }
            break;
        case 'preset-earring':
            if (cookies.currencyCode === 'INR' ){
                return parseInt((item.metalWeight * 13 + item.metalWeight * cookies.goldPrice['18KT'] + 330 )  * currencyMultiplier) 
            }
            else{
                return parseInt((350  + 330) * currencyMultiplier)
            }
            break;
        default:
            if (cookies.currencyCode === 'INR' ){
                return parseInt((item.metalWeight * 13 + item.metalWeight * cookies.goldPrice['18KT'] + 330 )  * currencyMultiplier)
            }
            else{
                return parseInt((item.ringPrice + 330) * currencyMultiplier)
            }
            break;
    }
}

export default getFromAmount