const crypto = require('crypto')

 module.exports = (req, res, next) => {
                    /**
                     * user must be authenticated.
                     */
                    if(!req.user){ return next() }
                    
                    /**
                     * user already has a fingerprint
                     */
                    if(req.user.fingerprint){ return next() }


                    var userAgent = req.headers['user-agent']
                    var userAgentLength = req.headers['user-agent'].length
                    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null)
                    var acceptEncoding = req.headers['accept-encoding']

                    var hash = crypto.createHash("sha256").update(userAgent + userAgentLength + ip + acceptEncoding).digest("base64")

                    req.user.fingerprint = hash
                    next()
 }
 
 
 
 