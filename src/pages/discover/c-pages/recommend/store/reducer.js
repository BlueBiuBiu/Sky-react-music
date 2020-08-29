import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultStatus = Map({
  topBanners: [],
  hotRecommend: []
})

function reducer(state = defaultStatus, action){
  switch(action.type){
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend)
    default:
      return state
  }
}

export default reducer