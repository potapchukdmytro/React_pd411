import axios from "axios";

export const loadAuthors = () => async (dispatch) => {
    const authorsUrl = import.meta.env.VITE_AUTHORS_URL;
    const pageCount = 150;
    const page = 1;
    const url = `${authorsUrl}?page_size=${pageCount}&page=${page}`;

    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const { data } = response;
            dispatch({ type: "loadAuthors", payload: data.data.items });
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};
