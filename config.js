/**  
    The config.js 
    reads the .env file and collects the variables in the envs object.
*/
const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;

module.exports = {
    API_URL: envs.API_URL,
    USER_KEY: envs.USER_KEY,
    PORT: envs.PORT,
    NODE_ENV: envs.NODE_ENV
};