import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd';

import { getTopBannerAction } from '../../store/actionCreators'

import { BannerWrapper } from './style'

export default memo(function SkyBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const btnUseRef = useRef();

  const { topBanners } = useSelector(state => ({
    topBanners: state.get("recommend").get("topBanners")
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from,to) => {
    setCurrentIndex(to)
  },[])

  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="center wrap-v2">
        <div className="center-left">
          <Carousel effect="fade" autoplay ref={ btnUseRef } beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return(
                  <div key={item.imageUrl} className="left-item" style={{color: "red"}}>
                    <img src={item.imageUrl} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="center-right">
          <a href="https://music.163.com/#/download" target="_blank"></a>
        </div>
        <div className="banner-control">
            <button className="right" onClick={e => btnUseRef.current.next()}></button>
            <button className="left" onClick={e => btnUseRef.current.prev()}></button>
        </div>
      </div>
    </BannerWrapper>
  )
})
