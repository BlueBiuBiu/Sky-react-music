import React, { memo } from 'react'

import { SongCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'

export default memo(function SongCover(props) {
  const { info } = props;

  return (
    <SongCoverWrapper>
      <div className="top">
        <img src={getSizeImage(info.picUrl,140)} alt=""/>
        <div className="top-bottom">
          <div className="top-left">
            <i className="icon sprite_icon"></i>
          </div>
          <div className="top-center">
            {getCount(info.playCount)}
          </div>
          <div className="top-right">
            <i className="icon sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="center text-nowrap">{info.name}</div>
      <div className="bottom text-nowrap">{info.copywriter}</div>
    </SongCoverWrapper>
  )
})
