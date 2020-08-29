import { combineReducers } from 'redux-immutable'

import { reducer as recommendRuducer} from '../pages/discover/c-pages/recommend/store'

const cReducer = combineReducers({
  recommend: recommendRuducer
})

export default cReducer