import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClickHomeLogo = () => {
    navigate("/");
  };
  const onClickLogin = () => {
    navigate("/login");
  };
  const onClickSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <StyledHeader>
        <StyledBtnDiv onClick={onClickHomeLogo}>별스타</StyledBtnDiv>

        <div class="logedOut">
          <StyledBtnDiv onClick={onClickLogin}>Login</StyledBtnDiv>
          <StyledBtnDiv onClick={onClickSignup}>Sign Up</StyledBtnDiv>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;

// styled
const StyledHeader = styled.header`
  width: 100vw;
  height: 5rem;

  background-color: white;
  position: fixed;
  top: 0;
  left: 0;

  border-bottom: 0.7px solid rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;

  div:last-child {
    display: flex;
  }
`;

const StyledBtnDiv = styled.div`
  font-family: Gaegu;
  font-size: 1.5rem;

  border-radius: 1rem;
  width: 8rem;
  height: 3rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
