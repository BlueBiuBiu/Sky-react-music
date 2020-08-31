import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`

  .image {
    position: relative;
    width: ${props => props.width};
    height: ${props => props.size};

    img {
      width: ${props => props.size};
      height: ${props => props.size};
    }

    .cover {
      background-position: 0 ${props => props.bgp};
    }
  }

  .title {
    width: ${props => props.width};
    height: ${props => props.size};

    font-size: 13px;

    .name {
      color: #000;
    }

    .artist {
      color: #666;
    }
  }

`