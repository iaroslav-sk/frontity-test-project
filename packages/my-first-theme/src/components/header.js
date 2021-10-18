import React from "react";
import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";

const MainHeader = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <HeaderContent>
      <h1>Hello Frontity !</h1>
      {state.theme.isUrlVisible ? (
        <>
          <p> Current URL : {state.router.link}</p>
          <Button onClick={actions.theme.toggleUrl}>Hide URL</Button>{" "}
        </>
      ) : (
        <Button onClick={actions.theme.toggleUrl}>Show URL</Button>
      )}
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <nav>
          <Menu>
            <Link link="/">Home</Link>
            <Link link="/destinations">Destinations</Link>
            <Link link="/about-us">About us</Link>{" "}
          </Menu>
        </nav>
      </Header>
    </HeaderContent>
  );
};

export default connect(MainHeader);

const Header = styled.header`
  background-color: #e5edee;
  border: solid maroon;
  border-width: 0 0 8px 0;
  border-color: ${(props) =>
    props.isPostType
      ? props.isPage
        ? "lightsteelblue"
        : "lightseagreen"
      : "maroon"};
  h1 {
    color: #4a4a4a;
  }
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;
  :hover {
    cursor: pointer;
    color: #888;
  }
`;
