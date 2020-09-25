import * as Actions from '../actions'

const initialState = {
    data: null,

}

const customerReducer = function (state = initialState, action) {
    switch (action.type) {

        case Actions.GET_CUSTOMERS: {
            return {
                ...state,
                data: action.payload
            }
        }
        case Actions.SAVE_USER: {
            return {
                ...state,
                data: action.payload
            }
        }
        case Actions.EDIT_PROFILE: {
            return {
                ...state,
                data: action.payload
            }
        }


        default: {
            return state
        }
    }
}

export default customerReducer
