import axios from 'axios'
import constants from '../../../../fuse-configs/constants'
import {showMessage} from '../../../../store/actions/fuse'

export const GET_CUSTOMERS = '[DASHBOARD] GET_CUSTOMERS'
export const GET_ORDERS = '[DASHBOARD] GET_ORDERS'
export const GET_BUSINESSES = '[DASHBOARD] GET_BUSINESSES'

export function getCustomers (){
    const request = axios.get(`${constants.API_URL}/getCustomers`)

    return (dispatch) =>
    request.then((response) => {
      console.log("get customers",response.data);
      // dispatch(showMessage({message: response.data.message}))
        dispatch({
          type: GET_CUSTOMERS,
          payload: response.data.data
        })
      }
    )
    // return (dispatch) =>
    // request.then((response) => {

    //   return dispatch({
    //     type: GET_CUSTOMERS,
    //     data: response.data.data
    //   })

    // }).catch(error => {
    //   console.log(error)
    //   //dispatch(showMessage({message: error.response.data.message}))

    // })
}
