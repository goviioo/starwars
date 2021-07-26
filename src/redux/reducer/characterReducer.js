import { GET_CHAR_DETAILS_ERROR, GET_CHAR_DETAILS_PENDING, GET_CHAR_DETAILS_SUCCESS, GET_CHAR_LIST_ERROR, GET_CHAR_LIST_PENDING, GET_CHAR_LIST_SUCCESS, RESET_CHARLIST } from "../actions/types"
import config from '../../../config.json';
const initialState = {
    getCharListPending: false,
    getCharListSuccess: false,
    getCharListError: false,
    getCharDetailsPending: false,
    getCharDetailsSuccess: false,
    getCharDetailsError: false,
    characterList: [],
    charDetails:null,
    nextPageUrl: null
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CHAR_LIST_PENDING: return {
            ...state,
            getCharListPending: true,
            getCharListSuccess: false,
            getCharListError: false,
        }
        case GET_CHAR_LIST_SUCCESS: return {
            ...state,
            getCharListPending: false,
            getCharListSuccess: true,
            getCharListError: false,
            characterList: [...state.characterList, ...payload.results],
            nextPageUrl: payload.next
        }
        case GET_CHAR_LIST_ERROR: return {
            ...state,
            getCharListPending: false,
            getCharListSuccess: false,
            getCharListError: true,
        }
        case GET_CHAR_DETAILS_PENDING: return {
            ...state,
            getCharDetailsPending: true,
            getCharDetailsSuccess: false,
            getCharDetailsError: false,
        }
        case GET_CHAR_DETAILS_SUCCESS: return {
            ...state,
            getCharDetailsPending: false,
            getCharDetailsSuccess: false,
            getCharDetailsError: false,
            characterList: [...state.characterList, ...payload.results],
            nextPageUrl: payload.next
        }
        case GET_CHAR_DETAILS_ERROR: return {
            ...state,
            getCharListPending: false,
            getCharListSuccess: false,
            getCharListError: true,
        }
        case RESET_CHARLIST: return initialState
    default: return state
    }
}