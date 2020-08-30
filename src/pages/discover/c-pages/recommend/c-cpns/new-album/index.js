import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd';

import { getNewAlbumAction } from '../../store/actionCreators'

import NewAlbum from 'components/theme-header-rcm'
import AlbumCover from 'components/albumCover'
import { NewAlbumWrapper } from './style'


export default memo(function SkyNewAlbum() {

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend","newAlbums"])
    }),shallowEqual)

  const carousel = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  },[dispatch])

  return (
    <NewAlbumWrapper>
      <NewAlbum leftTitle="新碟上架"/>
      <div className="bottom">
        <div className="bottom-left sprite_02" onClick={e => carousel.current.prev()}></div>
        <div className="bottom-item">
          <Carousel dots={false} ref={carousel}>
            {
              [0,1].map(item => {
                return (
                  <div key={item} className="item">
                    {
                      newAlbums.slice(item*5,(item+1)*5).map(item => {
                        return (
                          <AlbumCover key={item.id} info={item}/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel >
        </div>
        <div className="bottom-right sprite_02" onClick={e => carousel.current.next()}></div>
      </div>
    </NewAlbumWrapper>
  )
})
