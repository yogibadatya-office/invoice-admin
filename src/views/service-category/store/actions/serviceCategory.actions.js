import axios from 'axios'
import constants from '../../../../fuse-configs/constants'
import {showMessage} from '../../../../store/actions/fuse'

export const ADD_CATEGORY = '[ServiceCategory] ADD_CATEGORY'
export const GET_ORDERS = '[DASHBOARD] GET_ORDERS'
export const GET_BUSINESSES = '[DASHBOARD] GET_BUSINESSES'

export function addServiceCateogry (data){
  console.log(data);

  let request
  if (data._id === undefined) {
    var formData=new FormData();
    formData.append("serviceCategoryName", data.serviceCategoryName);
    formData.append("serviceCategoryIcon", data.serviceCategoryIcon);
    request = axios.post(`${constants.API_URL}/service/addServiceCategory `, formData)
  } else {
    var formData=new FormData();
    formData.append("id", data._id);
    formData.append("serviceCategoryName", data.serviceCategoryName);
    formData.append("serviceCategoryIcon", data.serviceCategoryIcon);
    request = axios.post(`${constants.API_URL}/service/addServiceCategory `, formData)
  }

  return (dispatch) =>
    request.then((response) => {
        console.log("response of add service", response);
        dispatch(showMessage({message: 'Add Service Category !!'}))

        return dispatch({
          type: ADD_CATEGORY,
          payload: response.data
        })
      }
    ).catch(error => {
      console.log(error)
      dispatch(showMessage({message: error.response.data.message}))

    })
}
