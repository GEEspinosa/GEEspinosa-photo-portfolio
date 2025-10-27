import styled from 'styled-components';

const Gallery = styled.div`
  box-sizing: border-box;

  ul {
    display: flex;
    margin-right: 38px;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
  }

  li {
    height: 32vh;
    margin: 4px;

    :hover {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      height: 100%;
      margin: 6px;
    }
  }

  img {
    // width: 100%;
    // height: 100%;
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;

    transition: filter 0.3s ease; // smooth transition

  &:hover {
    filter: invert(1) brightness(0.7); // invert + slightly dim
  }
  }
`;

const GallerySmall = styled.div.attrs(props => ({smGalleryColNum: undefined}))`
  box-sizing: border-box;

  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    justify-content: space-evenly;
  }

  .column {
    flex-wrap: wrap;
    flex: 25%;
    padding: 10px;
  }

  .column img {
    margin-top: 14px;
    vertical-align: middle;
    transition: filter 0.3s ease; // smooth transition

  &:hover {
    filter: invert(1) brightness(0.7); // invert + slightly dim
  }
  }
`;

export { Gallery, GallerySmall };
