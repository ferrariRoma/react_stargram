import ContentStyle from "../components/ContentStyle";
import { ContentBox } from "./Home";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ContentDetail = () => {
  const params = useParams();
  const requestUser = useSelector((state) => state.user.user);
  const requestContent = useSelector((state) => state.content.content);

  const searchResultUser = requestUser.contentId.includes(params.id);
  const searchResultContent = requestContent.filter(
    (el) => el.contentId === params.id
  );
  return (
    <>
      <Header />
      <ContentBox>
        <ContentStyle
          detailChecked
          userChecked={searchResultUser}
          props={searchResultContent[0]}
        ></ContentStyle>
      </ContentBox>
    </>
  );
};

export default ContentDetail;
