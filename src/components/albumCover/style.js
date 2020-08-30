import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`

  img {
    width: ${props => props.width};
    height: ${props => props.height};
  }

  .title {
    width: ${props => props.width};
    height: ${props => props.height};

    font-size: 13px;

    .name {
      color: #000;
    }

    .artist {
      color: #666;
    }
  }

`