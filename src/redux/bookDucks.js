import axios from "axios"

/**
 * CONSTANT
 */
const bookData = {
    books: [],
    categories: [],
    category: "all"
}

/**
 * TYPES
 */
const GET_BOOKS_SUCCESSFULLY = 'GET_BOOKS_SUCCESSFULLY'
const GET_CATEGORIES_SUCCESSFULLY = 'GET_CATEGORIES_SUCCESSFULLY'

/**
 * REDUCER
 */
export default function bookReducer( state = bookData, action ) {
    switch ( action.type ) {
        case GET_BOOKS_SUCCESSFULLY:
            return { ...state, books: action.payload }
        case GET_CATEGORIES_SUCCESSFULLY:
            return { ...state, categories: action.payload }
    
        default:
            return state
    }
}

/**
 * ACTIONS
 */
export const getBooks = () => async ( dispatch, getState ) => {
    //https://www.etnassoft.com/api/v1/get/?results_range=0,10
    const urlApi = 'https://www.etnassoft.com/api/v1/get/?results_range=0,10'

    try {
        const res = await axios.get(urlApi)
        dispatch({
            type: GET_BOOKS_SUCCESSFULLY,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getCategories = () => async ( dispatch, getState ) => {
    //https://www.etnassoft.com/api/v1/get/?get_categories=all
    const urlApi = 'https://www.etnassoft.com/api/v1/get/?get_categories=all'

    try {
        const res = await axios.get(urlApi)
        dispatch({
            type: GET_CATEGORIES_SUCCESSFULLY,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}