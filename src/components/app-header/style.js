import styled from "styled-components"

export const HeaderWrapper = styled.div`
  font-size: 16px;
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;

    .logo {
      width: 157px;
      height: 100%;
      display: block;
      background-position: 0 0;
    }
    
    .center {
      width: 508px;
      height: 70px;
      margin-left: 15px;
      line-height: 70px;
      display: flex;
      text-align: center;
      justify-content: space-around;

      .title {

        a {
          color: #ccc;
          text-decoration: none;
        }

        &:hover {
          cursor: pointer;
          background: #000;
        }
        }
      }
    }

    .right {
      display: flex;
      margin-left: 50px;
      text-align: center;
      height: 70px;
      line-height: 70px;

      .search {
        width: 158px;
        height: 32px;
        margin-top: 20px;
        border-radius: 16px;
      }

      .creator {
        margin-left: 15px;
        margin-top: 20px;
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #666;
        border-radius: 16px;
        border: 1px solid #666;

        :hover {
          cursor: pointer;
          color: #ccc;
          border: 1px solid #ccc;
        }
      }

      .login {
        margin-left: 10px;
        color: #ccc;
        width: 50px;
        height: 45px;

        :hover {
          cursor: pointer;
        }
      }
    }
  }

  .divider {
    height: 5px;
    background: #C20C0C;
  }


`