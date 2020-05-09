import {CHANGE_SEARCH_FIELD} from './constants.js'

const initialState = {
    searchField: ''
}

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})