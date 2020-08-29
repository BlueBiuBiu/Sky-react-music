import styled from 'styled-components'

export const SongCoverWrapper = styled.div`
  font-size: 15px;
  width: 140px;
  height: 190px;
  margin: 20px;

  .top {
    width: 140px;
    height: 140px;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 138;
      height: 140px;
    }

    .top-bottom {
      position: absolute;
      height: 27px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,.3);

      .top-left {
        position: absolute;
        left: 0;
        margin-top: 5px;
        margin-left: 10px;

        .icon {
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
      }

      .top-center {
        position: absolute;
        top: 5px;
        left: 30px;
        color: #ccc;
      }

      .top-right {
        position: absolute;
        margin-top: 5px; 
        margin-right: 10px;
        right: 0;

        .icon {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }

    }
  }

  .center {
    width: 100%;
    height: 20px;
    margin: 5px;
  }

  .bottom {
    width: 100%;
    height: 20px;
    margin: 5px;
  }
  
`