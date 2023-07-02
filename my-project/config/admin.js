const crypto = require('crypto');
const secret = crypto.randomBytes(16).toString('base64');

module.exports = ({ env }) => ({
  // outras configurações...
  apiToken:{
    salt: env('STRAPI_API_TOKEN_SALT', 'd9b0df66ff97a666027e665707b4e3e7')
  },
  auth: {
    secret: env('STRAPI_ADMIN_JWT_SECRET', secret),
  },
  // outras configurações...
});
