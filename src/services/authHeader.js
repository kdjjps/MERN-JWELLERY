export default function authHeader() {
    const userToken = JSON.parse(window.localStorage.getItem('userToken'))
  
    if (userToken) {
      return { Authorization: userToken }
    } else {
      return {}
    }
  }