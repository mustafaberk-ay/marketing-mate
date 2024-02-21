const { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');

const AUTH0_DOMAIN = 'dev-i5pphm8b3pi7nmbn.us.auth0.com';
const API_AUDIENCE = 'https://dev-i5pphm8b3pi7nmbn.us.auth0.com/api/v2/';

export const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),
    audience: API_AUDIENCE,
    issuer: `https://${AUTH0_DOMAIN}/`,
    algorithms: ['RS256'],
});