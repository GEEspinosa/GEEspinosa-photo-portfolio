import styled from "styled-components";

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

    //dev note: bigger images
    // height: 55vh;
    // margin: 14px;
    // border: solid;

    @media (max-width: 768px) {
      //dev note: adding width will look good with .rows
      //width: 40%;
      height: 100%;

      //margin: 14px;
      margin: 6px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

const GallerySmall = styled.div`
  box-sizing: border-box;

  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    justify-content: space-evenly;
  }

  .column {
    flex: 25%;
    max-width: 40%;

    padding: 10px;
  }

  .column img {
    margin-top: 14px;
    vertical-align: middle;    
  }
`;

const TopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: white;
    color: black;
    border: 2px solid #555555;
    font-size: 16px;
    padding: 16px 32px;
    margin: 4px 2px;

    transition-duration: 0.4s;
    cursor: pointer;

    @media (max-width: 802){
      position: absolute
      font-size: 16px;
      padding: 10% 20%;
      margin: 4px 2px;
    }
  }

  :hover {
    background-color: #555555;
    color: white;
  }

`;

export { Gallery, GallerySmall, TopButton };
