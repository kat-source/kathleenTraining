require('dotenv').config()
const jwt = require('jsonwebtoken');


function authenticateToken(req, res, next) {
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(' ')[1]
   if(token == null) return res.sendStatus(401)

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
       console.log(err);
       if (err) return res.sendStatus(403)
       req.user = user
       next()
   })
}
function generateAccessToken(user) {
   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}



// app.post('/token', (req, res) => {
//     const refreshToken = req.body.token
//     if(refreshToken == null) return res.sendStatus(401)
//     if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403)
//         const accessToken = generateAccessToken({ name: user.name })
//         res.json({ accessToken })
//     })
// })

module.exports = {
    generateAccessToken,
    authenticateToken
}