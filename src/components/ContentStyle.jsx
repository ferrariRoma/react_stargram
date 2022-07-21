import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContentStyle = (props) => {
  const { fileUrl, photoStyle, text, contentId } = props.props;
  // const giveInfo = {
  //   fileUrl,
  //   like,
  //   photoStyle,
  //   text,
  //   contentId,
  // };

  const navigate = useNavigate();
  const onClickContent = () => {
    return navigate(`/content/${contentId}`);
  };
  // detail page에서는 Onclick이벤트 빼기
  // 자기 게시물이면 수정 삭제 페이지 추가
  return (
    <>
      {props.detailChecked ? (
        photoStyle === "rightPhoto" ? (
          <PhotoRightContentBox detail>
            <div className="textBox">{text}</div>
            <div className="photoBox">
              <img alt="contentImg" src={fileUrl}></img>
            </div>
          </PhotoRightContentBox>
        ) : photoStyle === "leftPhoto" ? (
          <PhotoRightContentBox detail>
            <div className="photoBox">
              <img alt="contentImg" src={fileUrl}></img>
            </div>

            <div className="textBox">{text}</div>
          </PhotoRightContentBox>
        ) : (
          <PhotoBottomContentBox detail>
            <div className="textBox">{text}</div>
            <div className="photoBox">
              <img alt="contentImg" src={fileUrl}></img>
            </div>
          </PhotoBottomContentBox>
        )
      ) : photoStyle === "rightPhoto" ? (
        <PhotoRightContentBox onClick={onClickContent}>
          <div className="textBox">{text}</div>
          <div className="photoBox">
            <img alt="contentImg" src={fileUrl}></img>
          </div>
        </PhotoRightContentBox>
      ) : photoStyle === "leftPhoto" ? (
        <PhotoRightContentBox onClick={onClickContent}>
          <div className="photoBox">
            <img alt="contentImg" src={fileUrl}></img>
          </div>
          <div className="textBox">{text}</div>
        </PhotoRightContentBox>
      ) : (
        <PhotoBottomContentBox onClick={onClickContent}>
          <div className="textBox">{text}</div>
          <div className="photoBox">
            <img alt="contentImg" src={fileUrl}></img>
          </div>
        </PhotoBottomContentBox>
      )}
      {props.userChecked && (
        <>
          <StyledBtnContainer>
            <button>수정</button>
            <button>삭제</button>
          </StyledBtnContainer>
        </>
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

  margin-bottom: ${(props) => (props.detail ? "1rem" : "5rem")};

  .textBox {
    width: 50%;
    display: flex;

    background-color: #d5e5f3;
    padding: 2rem;

    overflow: ${(props) => (props.detail ? "auto" : "hidden")};
    text-overflow: ${(props) => (props.detail ? "auto" : "ellipsis")};
    white-space: ${(props) => (props.detail ? "auto" : "nowrap")};
    display: ${(props) => (props.detail ? "auto" : "block")};
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

  margin-bottom: ${(props) => (props.detail ? "1rem" : "5rem")};

  .textBox {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d5e5f3;
    padding: 2rem;

    overflow: ${(props) => (props.detail ? "auto" : "hidden")};
    text-overflow: ${(props) => (props.detail ? "auto" : "ellipsis")};
    white-space: ${(props) => (props.detail ? "auto" : "nowrap")};
    display: ${(props) => (props.detail ? "auto" : "block")};
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

const StyledBtnContainer = styled.div`
  width: 50%;
  height: 5rem;
  margin: auto;
  display: flex;
  justify-content: space-around;
  button {
    font-family: Gaegu;
    font-size: 2rem;
    letter-spacing: 0.5rem;

    width: 6rem;
    height: 3rem;

    border: 0.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }
`;
