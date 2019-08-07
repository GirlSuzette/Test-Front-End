import axios from 'axios';

export default axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production`
})