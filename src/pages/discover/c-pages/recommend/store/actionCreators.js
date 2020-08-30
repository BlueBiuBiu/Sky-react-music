import * as constant from './constants'

import { getTopBanner, getHotRecommend, getNewAblum } from '@/networks/recommend'

const changeTopBannerAction = (res) => ({
  type: constant.CHANGE_TOP_BANNER,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: constant.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
})

const changeNewAlbumAction = (res) => ({
  type: constant.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
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

export const getNewAlbumAction = limit => {
  return dispatch => {
    getNewAblum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

