import axios from "axios";

export const getProduct = async ({ length, width, height, weight }) => {
    const response = await axios.get(`http://localhost:3000/api/v1/products`, {
        params: { length, width, height, weight },
    });
    return response.data;
};
