import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import React, { memo, useEffect} from 'react'

import HotRecommend from 'components/theme-header-rcm'
import { getHotRecommendAction } from '../../store/actionCreators'
import HotRecommendSongCover from 'components/songsCover'

import { HotRecommendWrapper } from './style'

export default memo(function SkyRecommend() {

  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(["recommend","hotRecommend"])
  }),shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  },[dispatch])

  return (
    <div>
      <HotRecommend title={["华语","流行","摇滚","民谣","电子"]} leftTitle="热门推荐"/>
      <HotRecommendWrapper>
        {
          hotRecommend.map((item, index) => {
            return(
              <div key={item.id}>
                <HotRecommendSongCover info={item}/>
              </div>
            )
          })
        }
      </HotRecommendWrapper>
    </div>
  )
})
