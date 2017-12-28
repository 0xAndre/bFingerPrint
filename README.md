# bFingerPrint

bFingerPrint is a middleware for Express, that has minimal functionality of its own: 

 * Save browser fingerprint of a logged user
 * A hash is generated with information gathered from a user's browser
 * User-Agent, Length of User-Agent, Client's IP, Client's Accept Encoding



If a user with an anonymous browser has already been logged in to the web application, you will know.

## Usage:

npm install bFingerPrint

```javascript
const bFingerPrint = require('bFingerPrint')

router.get('/generateFingerPrint', bFingerPrint, (req, res, next) => {
  res.redirect('/dashboard')
})
```
