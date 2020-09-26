import * as Actions from '../actions'

const initialState = {
    data: null,
    orderDetailsDialog: {
        type: 'new',
        props: {
          open: false
        },
        data: null
      },
      customerDetailsDialog: {
        type: 'new',
        props: {
          open: false
        },
        data: null
      }
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
        case Actions.OPEN_ORDER_DETAILS_DIALOG: {
            return {
              ...state,
              orderDetailsDialog: {
                type: 'edit',
                props: {
                  open: true
                },
                data: action.data
      
              }
            }
          }
        case Actions.CLOSE_ORDER_DETAILS_DIALOG: {
      
            return {
              ...state,
              orderDetailsDialog: {
                type: 'edit',
                props: {
                  open: false
                },
                data: action.data
              }
            }
          }
          case Actions.OPEN_CUSTOMER_DETAILS_DIALOG: {
            return {
              ...state,
              customerDetailsDialog: {
                type: 'edit',
                props: {
                  open: true
                },
                data: action.data
      
              }
            }
          }
        case Actions.CLOSE_CUSTOMER_DETAILS_DIALOG: {
      
            return {
              ...state,
              customerDetailsDialog: {
                type: 'edit',
                props: {
                  open: false
                },
                data: action.data
              }
            }
          }

        default: {
            return state
        }
    }
}

export default customerReducer
