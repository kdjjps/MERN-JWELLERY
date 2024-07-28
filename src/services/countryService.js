import axios from "axios";

class CountryService {

    getCountries(){
        return axios
        .get('/country/get-country')
        .then(response => {
            return response
        })
        .catch(err => {
            console.error(err)
        })
    }

    getStates(countryCode){
        return axios
        .post('/country/get-states', {countryCode})
        .then(response => {
            return response
        })
        .catch(err => {
            console.error(err)
        })
    }
}

export default new CountryService()