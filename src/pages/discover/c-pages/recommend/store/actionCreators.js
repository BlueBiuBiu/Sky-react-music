import * as constant from './constants'

import { getTopBanner, getHotRecommend } from '@/networks/recommend'

const changeTopBannerAction = (res) => ({
  type: constant.CHANGE_TOP_BANNER,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: constant.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      //console.log(res);
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      //console.log(res);
      dispatch(changeHotRecommendAction(res))
    })
  }
}

