const jwt = require('jsonwebtoken');
const accessTokenSecret = "luxury@gems@123"

function authenticateJWT (req, res, next){

    const authHeader = req.headers.authorization

    jwt.verify(authHeader, accessTokenSecret, (err, verifiedData) => {

        if(err){
            req.message = err.message
            }
        else{
            req.verifiedData = verifiedData
            }
        next()
    });
}

function signJWT (userDetails){
    return jwt.sign({user: userDetails}, accessTokenSecret, {expiresIn: '120m'});
}

module.exports = {
    authenticateJWT, 
    signJWT
}