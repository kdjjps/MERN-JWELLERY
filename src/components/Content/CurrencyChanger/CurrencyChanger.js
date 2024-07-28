import React,{useState, useEffect, useContext} from 'react'
import CurrencyChangerModal from './style'
import { useCookies } from 'react-cookie'
import { PriceContext } from '../../../contexts/PriceContext'
import CurrencyLooker from '../../Header/CurrencyLooker'

export default function CurrencyChanger({handleModal}) {
    const [currencyWindowStatus, setCurrencyWindowStatus] = useState(true)
    const [cookies, setCookie] = useCookies();

    const {userCurrency, onClickCurrencySetter, currencyArray, handleCurrencyArraySequence} = useContext(PriceContext)

    const closeCurrencyWindow = () => {
        if (!cookies.currencyCode) {
            setCookie('currencyCode', 'USD', { path: '/' })
        }
        setCurrencyWindowStatus(false)
        document.getElementById('root').setAttribute('style', '')
        window.scrollTo(0, window.scrollY)
    }

    useEffect(() => {
            if (cookies.currencyCode == undefined && window.location.pathname === '/'){
            setCurrencyWindowStatus(true)
            document.getElementById('root').setAttribute('style', `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`)
            }
            else{
                setCurrencyWindowStatus(false)
                document.getElementById('root').setAttribute('style', '')
                window.scrollTo(0, window.scrollY)
            }
    },[])

    return (
        <CurrencyChangerModal status={currencyWindowStatus} >
            <section>
                <div>
                    <h2>Welcome To</h2>
                    <h1>Luxury Gems Company</h1>
                </div>
                <div  style={{display:'flex', alignItems:'center', justifyContent:'center', background:'#FFFFFF', height:'35px', padding:'2px 8px'}}>
                    <p style={{fontSize: '1.4rem', marginRight: '10px', textTransform:'capitalize', letterSpacing:'1px', verticalAlign:'middle', color:'rgb(30,46,76)', fontWeight:'bold'}}>Select Currency : </p>
                    <CurrencyLooker />
                </div>
                <button onClick={closeCurrencyWindow}>Proceed</button>
                <div id='note'>
                    [Note: Payments will be processed in the currency selected by you]
                </div>
            </section>
        </CurrencyChangerModal>
    )
}