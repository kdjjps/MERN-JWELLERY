
import { accountService } from '../services/accountService';

const facebookAppId = '1327542041011067'

export function initFacebookSdk() {
    
    return new Promise(resolve => {

        // wait for facebook sdk to initialize before starting the react app
        window.fbAsyncInit = function () {

            window.FB.init({
                appId: facebookAppId,
                cookie: true,
                xfbml: true,
                version: 'v11.0'
            });

            // auto authenticate with the api if already logged in with facebook
            window.FB.getLoginStatus(({authResponse}) => {

                if (authResponse) {
                    accountService.fbAPIAuthenticate(authResponse.accessToken).then(resolve);
                } else {
                    console.log('Not Logged In')
                    resolve();
                }
            });
        };

        // load facebook sdk script
        (function (d, s, id) {

            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); 
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));    
    });
}