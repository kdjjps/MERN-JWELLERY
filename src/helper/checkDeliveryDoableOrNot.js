import {bvcIndianPostCodeSupportData, bvcInternationalCountrySupportData} from '../fakedata/bvc'

const checkDeliverDoableOrNot = (country, postalCode) => {

    if (country === 'IN'){
        return bvcIndianPostCodeSupportData.includes(parseInt(postalCode))
    }
    else{
        return bvcInternationalCountrySupportData.includes(country)
    }
}

export default checkDeliverDoableOrNot