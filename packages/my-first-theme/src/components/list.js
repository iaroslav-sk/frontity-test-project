import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);

  return (
    <Items>
      <h1>List component</h1>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        const Html2React = libraries.html2react.Component;

        return (
          <div key={item.id}>
            <h2>{post.title.rendered}</h2>
            <Html2React html={post.excerpt.rendered} />
            <Link key={item.id} link={post.link}>
              Read more...
            </Link>
            <br />
          </div>
        );
      })}
      <PrevNextNav>
        {" "}
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous);
            }}
          >
            {" "}
            &#171; Prev{" "}
          </button>
        )}{" "}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next);
            }}
          >
            {" "}
            Next &#187;{" "}
          </button>
        )}{" "}
      </PrevNextNav>
    </Items>
  );
};

export default connect(List);

const Items = styled.div`
  div {
    & > h2 {
      display: block;
      margin: 3px 0;
      font-size: 1.2em;
      color: steelblue;
      text-decoration: none;
    }
    & > a {
      display: block;
      margin: 6px 0;
      font-size: 0.9em;
      color: palevioletred;
      text-decoration: none;
    }

    & > p {
      color: gray;
      & > a {
        display: none;
      }
    }
  }
`;
const PrevNextNav = styled.div`
  padding-top: 1.5em;
  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`;
