import axios from 'axios';

import { history } from '../helper/history';

const fbBaseUrl = `/facebook/authenticate-facebook-access-token`;
const googleBaseUrl = `/google/authenticate-google-access-token`;

export const accountService = {
    fbLogin,
    fbAPIAuthenticate,
    fbLogout,
    googleLogin,
    googleAPIAuthenticate,
    googleLogout
}

// FB Oauth integration services

async function fbLogin() {

    // login with facebook then authenticate with the API to get a JWT auth token
    const { authResponse } = await new Promise(window.FB.login);
    if (!authResponse) return;

    await fbAPIAuthenticate(authResponse.accessToken);

    // get return url from location state or default to home page
    const { from } = history.location.state || { from: { pathname: "/" } };
    history.push(from);
}

async function fbAPIAuthenticate(accessToken) {

    // authenticate with the api using a facebook access token,
    // on success the api returns an account object with a JWT auth token
    const response = await axios.post(`${fbBaseUrl}`, { accessToken });
    const account = response.data;
    // console.log(account);
    // console.log(response.headers['authorization']);
    window.localStorage.setItem('userToken', JSON.stringify(response.headers['authorization']))
    window.location= '/'
    return account;
}

function fbLogout() {

    // revoke app permissions to logout completely because FB.fbLogout() doesn't remove FB cookie
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
    history.push('/login');
}

// Google oauth integration services

async function googleLogin() {
    let response = await window.gapi.auth2.getAuthInstance().signIn();
    console.log(response)
    googleAPIAuthenticate(response.xc.id_token)
}

async function googleAPIAuthenticate(id_token) {

    // authenticate with the api using a facebook access token,
    // on success the api returns an account object with a JWT auth token
    const response = await axios.post(`${googleBaseUrl}`, { id_token });
    const account = response.data;
    // console.log(account);
    // console.log(response.headers['authorization']);
    window.localStorage.setItem('userToken', JSON.stringify(response.headers['authorization']))
    window.location= '/'
    return account;
}

function googleLogout() {

    // revoke app permissions to logout completely because FB.fbLogout() doesn't remove FB cookie
    window.FB.api('/me/permissions', 'delete', null, () => window.google.logout());
    history.push('/login');
}