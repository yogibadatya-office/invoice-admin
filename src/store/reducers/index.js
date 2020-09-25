import { combineReducers } from 'redux'
import fuse from './fuse'
// import auth from '/auth/store/reducers'
import auth from '../../auth/store/reducers'

// import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers'

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        fuse,
      // quickPanel,
        ...asyncReducers
    });

export default createReducer;
