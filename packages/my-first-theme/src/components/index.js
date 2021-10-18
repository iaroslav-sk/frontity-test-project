import React from "react";
import { connect, Global, css, styled, Head } from "frontity";

import Switch from "@frontity/components/switch";
import List from "./list.js";
import Post from "./post.js";
import Destination from "./destination";
import MainHeader from "./header";

import Loading from "./loading";
import Error from "./error";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Head>
        <title>My First Frontity Theme</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
      </Head>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />
      <MainHeader />
      <hr />
      <Main>
        <main>
          <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Destination when={data.isDestinations} />
            <Post when={data.isPostType} />
            <Error when={data.isError} />
          </Switch>
        </main>
      </Main>
    </>
  );
};

export default connect(Root);

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;
