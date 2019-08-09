/**  
    The config.js collects the variables in the envs.
*/
const dotenv = require('dotenv');

module.exports = {
    API_URL: process.env.API_URL,
    USER_KEY: process.env.USER_KEY,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
};