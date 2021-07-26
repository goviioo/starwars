import { GET_CHAR_LIST_ERROR, GET_CHAR_LIST_PENDING, GET_CHAR_LIST_SUCCESS, RESET_CHARLIST } from "./types"

export const getCharActionSuccess = (payload) => {
    return({
        type: GET_CHAR_LIST_SUCCESS,
        payload 
    })
}


export const getCharActionError = (payload) => {
    return({
        type: GET_CHAR_LIST_ERROR,
        payload 
    })
}


export const getCharActionPending = (payload) => {
    return({
        type: GET_CHAR_LIST_PENDING,
        payload 
    })
}

export const resetCharacterList = () => {
    return({
        type: RESET_CHARLIST, 
    })
}