import React, { memo } from 'react'
import SkyBanner from './c-cpns/top-banner'

import { ContentWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'

function SkyRecommend(props) {
  
  return (
    <div>
      <SkyBanner />
      <ContentWrapper className="wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </div>
        <div className="right">
          右
        </div>
      </ContentWrapper>
    </div>
  )
}

export default (memo(SkyRecommend))

// function SkyRecommend(props) {
//   const { getBanner } = props;
  
//   useEffect(() => {
//     getBanner();
//   },[getBanner])
//   return (
//     <div>
//       SkyRecommend
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBannners: state.recommend.topBannners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanner: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(SkyRecommend))
