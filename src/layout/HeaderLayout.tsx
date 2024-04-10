import { Outlet } from "react-router-dom";
import styled from "styled-components";

const HeaderLayout = () => {
  return (
    <>
      <Header>title</Header>
      <Outlet />
    </>
  );
};

const Header = styled.header`
  color: red;
`;

export default HeaderLayout;
