import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  height: 34px;
  background: #C20C0C;
  font-size: 14px;

  .discover {
    display: flex;
    width: 504px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: white;
    margin-left: 190px;
    justify-content: space-between;

    .discover-item{

      a {
        display: inline-block;
        width: 70px;
        height: 20px;
        line-height: 20px;
        color: white;
        text-decoration: none;
        cursor: pointer;

        :hover, &.active {
        background: #9B0909;
        border-radius: 16px;
      }
      }

    }
  }
` 