import axios from "axios";

const createPreference = async (products) => {
    try {

        const response = await axios.post(
            `${import.meta.env.VITE_URL_ENDPOINT}/create_preference`,
            {
                products
            }
        );

        const { id } = response.data.response;
        
        return id;
    } catch (error) {
        console.error({error:error.message});
    }
};

export {
    createPreference,
}