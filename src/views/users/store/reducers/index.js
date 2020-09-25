import { combineReducers } from 'redux'
import users from './users.reducers'


const reducer = combineReducers({
  users
})

export default reducer
