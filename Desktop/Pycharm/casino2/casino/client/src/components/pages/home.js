import React from 'react'
import {useDispatch} from 'react-redux'
import Footer from '../partials/footer'
import Salon from '../salon/salon'
import Cookies from '../partials/cookies'
import { changeCookies } from '../../reducers/settings'
import Market from '../games/pages/market/market'
import Dashboard from '../games/pages/dashboard/dashboard'
import Panel from '../games/sidebar/panel'
import OtherPages from './otherPages'
import { changePage } from '../../reducers/page'

function Home(props) {
    const {home, page, user, cookies} = props
    let dispatch = useDispatch()
    
    function handleCookiesClick(){
        dispatch(changeCookies())
    }
    // function handleDonationClick(){
    //     dispatch(changePage('Donation'))
    // }

    return <div id="page-container">        
        {(() => {
            switch (page.page) {
                case "About":                    
                case "terms_cond":                    
                case "policy_privacy":                         
                case "Career":
                case "Questions":                    
                // case "Contact":
                // case "Donation":
                case "Cart":                    
                case "Checkout":                    
                case "Order":                    
                case "BuyCarrots":                    
                // case "how_to_play":
                    return <OtherPages {...props}/>                   
                case "Salon":
                    switch (page.game_page) {
                        case "dashboard":
                            return <>
                                <div className="content_wrap">
                                    <Dashboard {...props}></Dashboard>
                                </div>
                                <Panel {...props}></Panel>
                            </>
                        case "market":
                            return <>
                                <div className="content_wrap">
                                    <Market {...props}></Market>
                                </div>
                                <Panel {...props}></Panel>
                            </>
                        default:
                            return <Salon {...props} user={user} home={home} page={page}></Salon>
                    }                    
                default:
                    return <Salon {...props} user={user} home={home} page={page}></Salon>
            }
        })()}        
        {cookies !== '1' ? <Cookies lang={props.lang} cookiesClick={()=>handleCookiesClick()}></Cookies> : null}
        {/*<ButtonDonation handleDonationClick={()=>handleDonationClick()}/>*/}
        <Footer lang={props.lang}></Footer>
    </div>
}

export default Home