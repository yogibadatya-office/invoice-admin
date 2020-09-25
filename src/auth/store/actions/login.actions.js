import jwtService from '../../../jwtService'
import { setUserData } from './user.actions'
import {showMessage} from "../../../store/actions/fuse";

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_SUCCESS_WITH_NODE = 'LOGIN_SUCCESS_WITH_NODE'

export function submitLogin ({email, password}) {

  return (dispatch) =>
    jwtService.signInWithEmailAndPassword(email, password)
      .then((user) => {
          dispatch(setUserData(user))
          localStorage.setItem('admin',JSON.stringify(user) );
          // history.push("/dashboard")
          return dispatch({
            type: LOGIN_SUCCESS,
            user
          })
        }
      )
      .catch(error => {
          dispatch(showMessage({message: 'Invalid Credentials'}))
        return dispatch({
          type: LOGIN_ERROR,
          payload: error,

        })
      })
}

