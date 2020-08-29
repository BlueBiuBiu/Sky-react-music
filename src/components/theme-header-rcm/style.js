import styled from 'styled-components'

export const SkyThemeHeaderWrapper = styled.div`
  padding-top: 25px;
  width: 689px;
  margin: 20px auto;

  .theme-header {
    width: 689px;
    background-position: -225px -152px;
    position: relative;
    padding: 0 10px 4px 34px;
    align-items: center;
    display: flex;
    border-bottom: 2px solid #C10D0C;
  
    .left {
      font-size: 20px;
      width: 100px;
      height: 28px;

      :hover {
        cursor: pointer;
      }
    }

    .center {
      margin-top: 5px;
      font-size: 13px;
      color: #666;

      .title {
        height: 28px;
        line-height: 28px;
        display: flex;
        margin-left: 20px;

        .title-item {
          margin: 0 10px;

          :hover {
            cursor: pointer;
          }

          .item-left {
            margin-right: 12px;
          }
        }
      }
    }

    .right {
      margin-top: 3px;
      font-size: 13px;
      color: #666;
      align-items: center;
      position: absolute;
      left: 635px;

      :hover {
        cursor: pointer;
      }

      .icon {
        background-position: 0 -240px;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
      }
    }
  }
`