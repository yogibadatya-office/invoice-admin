import * as Actions from '../actions'

const initialState = {
    data: null,
    // customersData:[],
}

const serviceCategoryReducer = function (state = initialState, action){
    switch (action.types){
        case Actions.ADD_CATEGORY:{
            return{
                ...state,
                data: action.payload
            }
        }
        default: {
            return state
        }
    }
}
export default serviceCategoryReducer
