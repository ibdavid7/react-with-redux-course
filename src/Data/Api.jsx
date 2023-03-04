import React from 'react';
import axios from 'axios';

const Api = async (searchString) => {
    const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            },
            params: {
                query: searchString
            },
        });

        // console.log(response.data.results);

        return response.data.results;

    } catch (error) {
        console.error(error);
    }

};

export default Api;
