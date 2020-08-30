import React, { memo } from 'react'

import { AlbumCoverWrapper } from './style'

export default memo(function AlbumCover(props) {
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;
  console.log(info);
  return (
    <AlbumCoverWrapper size={size} width={width}>
      <img src={info.picUrl} alt=""/>
      <div className="title">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
