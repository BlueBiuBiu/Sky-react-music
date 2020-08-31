import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`

  .bottom {
    position: relative;
    width: 687px;
    height: 186px;
    background: #e7e4e4;
    border: 1px solid #d3d3d3;
    margin: 0 auto;

    .bottom-left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 17px;
      background-position: -260px -75px;

      :hover {
        cursor: pointer;
      }
    }

    .bottom-right {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 17px;
      background-position: -300px -75px;

      :hover {
        cursor: pointer;
      }
    }

    .bottom-item {
      width: 645px;
      height: 186px;
      margin: 0 auto;

        .item {
          margin-top: 26px;
          display: flex !important;
          justify-content: space-between;
          align-items: center;
        }
    }

  }
`