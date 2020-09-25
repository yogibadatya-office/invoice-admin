import * as Actions from '../actions'

const initialState = {
    data: null,
    customersData:[],
}

const dashboardReducer = function (state = initialState, action){
    switch (action.types){
        case Actions.GET_CUSTOMERS:{
            return{
                ...state,
                customersData: action.payload
            }
        }
        default: {
            return state
        }
    }
}
export default dashboardReducer
