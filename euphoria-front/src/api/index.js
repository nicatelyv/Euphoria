import axios from 'axios';

const baseURL = 'euphoria-ecommerce.onrender.com/api'

export const axiosFunction = async ( method, endpoint, data ) => {

    try {
        const response = await axios({
            method,
            url: `https://${baseURL}${endpoint}`,
            data: data && data
        });
        return response.data;
    } catch(err) {
        console.log(err.message)
    }
}
