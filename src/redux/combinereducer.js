import { combineReducers } from 'redux'
import booksfetch from './reducer'
import authReducer from './auth/authreducer'


const rootReducer= combineReducers({
   booksfetch,
  auth: authReducer
})
export default rootReducer