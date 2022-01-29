import axios from "axios"

/**
 * CONSTANT
 */
const bookData = {
    books: [],
    categories: [],
    page_star: 0,
    amount_per_page: 10,
    category: "all",
    onBook: []
}

/**
 * TYPES
 */
const GET_BOOKS_SUCCESSFULLY        = 'GET_BOOKS_SUCCESSFULLY'
const GET_CATEGORIES_SUCCESSFULLY   = 'GET_CATEGORIES_SUCCESSFULLY'
const GET_ONE_BOOK_SUCCESSFULLY     = "GET_ONE_BOOK_SUCCESSFULLY"
const EMPTIES_BOOKS                 = 'EMPTIES_BOOKS'
const RESET_PAGES                   = 'RESET_PAGES'

/**
 * REDUCER
 */
export default function bookReducer( state = bookData, action ) {
    switch ( action.type ) {
        case GET_BOOKS_SUCCESSFULLY:
            return { ...state, ...action.payload }
        case GET_CATEGORIES_SUCCESSFULLY:
            return { ...state, categories: action.payload }
        case GET_ONE_BOOK_SUCCESSFULLY:
            return { ...state, onBook: action.payload}
        case EMPTIES_BOOKS:
            return { ...state, books: action.payload}
        case RESET_PAGES:
            return { ...state, page_star: action.payload}
    
        default:
            return state
    }
}

/**
 * ACTIONS
 */
export const getBooks = ( obj=[] ) => async ( dispatch, getState ) => {
    let { page_star = getState().books.page_star } = obj;
    let { amount_per_page = getState().books.amount_per_page } = obj;
    let { category = getState().books.category } = obj;
    
    //https://www.etnassoft.com/api/v1/get/?results_range=0,10
    //const urlApi = 'https://www.etnassoft.com/api/v1/get/?results_range=0,10'
    const urlApi = `https://www.etnassoft.com/api/v1/get/?results_range=${page_star},${amount_per_page}&category=${category}`

    try {
        const res = await axios.get(urlApi)
        
        if (res.status === 200) {
            
            dispatch({
                type: GET_BOOKS_SUCCESSFULLY,
                payload: {
                    books: res.data,
                    page_star,
                    amount_per_page,
                    category
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const getCategories = () => async ( dispatch, getState ) => {
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

export const getBookId = ( id ) => async ( dispatch, getState ) => {

    dispatch({
        type: GET_ONE_BOOK_SUCCESSFULLY,
        payload: id
    })
}

export const emptiesBooks = () => ( dispatch, getState ) => {

    dispatch({
        type: EMPTIES_BOOKS,
        payload: []
    })
}

export const resetPages = () => ( dispatch, getState ) => {

    dispatch({
        type: RESET_PAGES,
        payload: 0
    })
}