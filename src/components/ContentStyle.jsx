import React from "react";
import styled from "styled-components";

const ContentStyle = (props) => {
  console.log(props);
  return (
    <>
      <PhotoRightContentBox>
        <div className="textBox">글</div>
        <div className="photoBox">
          <img src="https://firebasestorage.googleapis.com/v0/b/react-stargram.appspot.com/o/images%2F277101534_4982028108555662_5312134991439326272_n.jpg?alt=media&token=920e9abb-ca6a-420a-9c16-e561e780175b"></img>
        </div>
      </PhotoRightContentBox>
      <PhotoRightContentBox>
        <div className="photoBox">
          <img src="https://firebasestorage.googleapis.com/v0/b/react-stargram.appspot.com/o/images%2F1565017373173.jpg?alt=media&token=bf11bd0e-2922-45de-898b-2238e5444170"></img>
        </div>
        <div className="textBox">
          이 글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요. 이
          글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요. 이
          글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요. 이
          글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요. 이
          글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요.
        </div>
      </PhotoRightContentBox>
      <PhotoBottomContentBox>
        <div className="textBox">
          이 글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요. 이
          글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요. 이
          글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요. 이
          글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요. 이
          글은 정말정말정말 긴 글이에요. 이 글은 정말정말정말 긴 글이에요.
        </div>
        <div className="photoBox">
          <img src="https://firebasestorage.googleapis.com/v0/b/react-stargram.appspot.com/o/images%2F1599180952496.jpg?alt=media&token=d4cc3460-6125-4ae1-85c4-7400715f0e90"></img>
        </div>
      </PhotoBottomContentBox>
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
