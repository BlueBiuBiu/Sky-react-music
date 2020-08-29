import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center/6000px;
  
  .center {
    height: 285px;
    background: red;
    position: relative;
    display: flex;
  }

  .center-left {
    width: 730px;

    .left-item {
      height: 284px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .ant-carousel .slick-dots li button {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .ant-carousel .slick-dots li.slick-active button{
      background: red;
    }
  }

  .center-right {
    width: 254px;
    height: 284px;
    background: url(${require("@/assets/img/download.png")})
  }

  .banner-control {
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;

    button {
      position: absolute;
      width: 37px;
      height: 63px;
      background-color: transparent;
      background-image: url(${require("@/assets/img/banner_sprite.png")});
      cursor: pointer;

      :hover {
        background-color: rgba(0, 0, 0, .1);
      }
    }
    .right {
      right: -68px;
      background-position: 0 -508px;
    }
    .left {
      left: -68px;
      background-position: 0 -360px;
    }
  }

`