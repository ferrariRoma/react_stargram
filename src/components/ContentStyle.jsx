import React from "react";
import styled from "styled-components";

const ContentStyle = (props) => {
  const { fileUrl, like, photoStyle, text } = props.props;
  console.log(props);
  return (
    <>
      {photoStyle === "rightPhoto" ? (
        <PhotoRightContentBox>
          <div className="textBox">{text}</div>
          <div className="photoBox">
            <img src={fileUrl}></img>
          </div>
        </PhotoRightContentBox>
      ) : photoStyle === "leftPhoto" ? (
        <PhotoRightContentBox>
          <div className="photoBox">
            <img src={fileUrl}></img>
          </div>
          <div className="textBox">{text}</div>
        </PhotoRightContentBox>
      ) : (
        <PhotoBottomContentBox>
          <div className="textBox">{text}</div>
          <div className="photoBox">
            <img src={fileUrl}></img>
          </div>
        </PhotoBottomContentBox>
      )}
    </>
  );
};

export default ContentStyle;

const PhotoRightContentBox = styled.div`
  font-family: Gaegu;
  font-size: 1.5rem;
  display: flex;

  width: 100%;
  height: 15rem;

  margin-bottom: 5rem;

  .textBox {
    width: 50%;
    display: flex;

    background-color: #d5e5f3;
    padding: 2rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  .photoBox {
    width: 50%;
    background-color: #e0e0e0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const PhotoBottomContentBox = styled.div`
  font-family: Gaegu;
  font-size: 1.5rem;
  width: 100%;
  height: 40rem;

  margin-bottom: 5rem;

  .textBox {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d5e5f3;
    padding: 2rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  .photoBox {
    width: 100%;
    height: 50%;
    background-color: #e0e0e0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
