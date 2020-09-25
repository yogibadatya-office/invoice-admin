import axios from 'axios'
import constants from '../../../../fuse-configs/constants'
import { showMessage } from '../../../../store/actions/fuse'

export const EDIT_PROFILE = '[ADMIN] EDIT PROFILE'
export const SAVE_USER = '[CUSTOMER APP] SAVE USER'
export const GET_CUSTOMERS = '[USER APP] GET_CUSTOMERS'

export function editProfile (data) {
  console.log(data);

  let request
  if (data._id === undefined) {
    request = axios.post(`${constants.API_URL}/admin/customer/signUp `, data)
  } else {
    var formData=new FormData();
    formData.append("id", data._id);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("dial_code", data.dial_code);
    formData.append("mobile_no", data.mobile_no);
    formData.append("profile_pic", data.profile_pic);
  //  let data1 ={
  //     id:  data._id,
  //     dial_code: data.dial_code,
  //     mobile_no: data.mobile_no,
  //     email: data.email,
  //     name: data.name,
  //     profile_Pic: data.profile_Pic === null ? '': data.profile_Pic,     
  //   }
    request = axios.post(`${constants.API_URL}/user/edit`, formData)
  }

  return (dispatch) =>
    request.then((response) => {
        console.log("response of update profile", response);
        dispatch(showMessage({message: 'Profile Updated !!'}))

        return dispatch({
          type: EDIT_PROFILE,
          payload: response.data
        })
      }
    ).catch(error => {
      console.log(error)
      dispatch(showMessage({message: error.response.data.message}))

    })
}
export function getCustomers() {
  // console.log('params')
  // const request = axios.get(`${constants.API_URL}/admin/customer/${params.customerId}`)
  const request = axios.get(`${constants.API_URL}/getCustomers`)
  // return (dispatch) =>
  //     request.then((response) =>     
  //       dispatch({
  //           type: GET_CUSTOMER_BY_ID,
  //           payload: response.data.data
  //         })
  //     )

  return (dispatch) =>
    request.then((response) => {

      return dispatch({
        type: GET_CUSTOMERS,
        payload: response.data.data
      })

    }).catch(error => {
      console.log(error)
      //dispatch(showMessage({message: error.response.data.message}))

    })
}

export function newCustomer () {
  const data = {
    // id: FuseUtils.generateGUID(),
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    priority: '',
    package: '',
    gender: '',
    dob: '',
    profilePic: '',
    bloodGroup: '',
    primaryContact:{
      countryCode:'',
      phone:''
    },
    emergencyContacts: []
    // membershipExpDate :'',
    // membershipFee :'',
    // phone: {
    //     countryCode: '',
    //     phone: ''
    // },

  }

  return {
    type: GET_CUSTOMERS,
    payload: data
  }
}

