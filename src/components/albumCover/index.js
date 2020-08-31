import React, { memo } from 'react'

import { AlbumCoverWrapper } from './style'
import { getSizeImage } from "@/utils/format-utils";

export default memo(function AlbumCover(props) {
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;
  //console.log(info);
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="image">
        <img src={getSizeImage(info.picUrl, 100)} alt="" />
        <a href="/abc" className="cover image_cover"></a>
      </div>
      <div className="title">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
