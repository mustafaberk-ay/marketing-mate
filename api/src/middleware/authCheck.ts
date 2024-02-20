const { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');

export const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-i5pphm8b3pi7nmbn.us.auth0.com/.well-known/jwks.json`,
    }),
    issuer: `https://dev-i5pphm8b3pi7nmbn.us.auth0.com/`,
    algorithms: ['RS256'],
});
