const getNewArrivalsTotalPrice = (itemType, itemWeight, cookies, smallDiamondPrice, solitaireDiamondPrice, item) => {

    const currencyMultiplier = cookies.exchangeRate[cookies.currencyCode]

    switch (itemType) {
        case 'fashion-ring':
            return parseInt(((itemWeight * 13) + (itemWeight * cookies.goldPrice['18KT']) + smallDiamondPrice/cookies.exchangeRate['INR'] + solitaireDiamondPrice/cookies.exchangeRate['INR']) * currencyMultiplier) + 1
            break;
        case 'diamond-earring':
            return parseInt(((itemWeight * 13) + (itemWeight * cookies.goldPrice['18KT']) + smallDiamondPrice/cookies.exchangeRate['INR'] + solitaireDiamondPrice/cookies.exchangeRate['INR']) * currencyMultiplier) + 1
            break;
        case 'diamond-pendant':
            return parseInt(((itemWeight * 13) + (itemWeight * cookies.goldPrice['18KT']) + smallDiamondPrice/cookies.exchangeRate['INR'] + solitaireDiamondPrice/cookies.exchangeRate['INR']) * currencyMultiplier) + 1
            break;
        case 'nose-pin':
            return parseInt(((itemWeight * 13) + (itemWeight * cookies.goldPrice['18KT']) + smallDiamondPrice/cookies.exchangeRate['INR']) * currencyMultiplier) + 1
            break;
        case 'alphabet-pendant':
            return parseInt(((itemWeight * 13) + (itemWeight * cookies.goldPrice['18KT']) + smallDiamondPrice/cookies.exchangeRate['INR']) * currencyMultiplier) + 1
            break;
    }
}

export default getNewArrivalsTotalPrice