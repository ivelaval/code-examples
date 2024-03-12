const axios = require('axios');

const callApi = async (url, called = 1) => {
    try {
        const result = await axios.get(url);
        console.log(result);
    } catch(error) {
        if (called > 5) {
            return {
                message: `Not was possible to getting data`,
            };
        }

        console.log(`There was a error. Attemp ${called}`, JSON.stringify(error));
        return callApi(url, called + 1);
    }
} 

callApi('https://jsonplaceholder.typicode.com/users');
