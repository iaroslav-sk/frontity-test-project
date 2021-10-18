import React from "react";
import { connect, styled, Head } from "frontity";
import dayjs from "dayjs";

// import Link from "@frontity/components/link";

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const author = state.source.author[post.author];
  const vievsDate = dayjs(post.date).format("DD MMMM YYYY");
  const imagePrev = state.source.attachment[data.id];
  console.log(imagePrev);

  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <h2>{post.title.rendered}</h2>
      {data.isPage ? (
        <PostInfo>
          <p>
            <strong>Posted: </strong> {vievsDate}
          </p>
          <p>
            <strong>Author: </strong> {author.name}
          </p>
        </PostInfo>
      ) : null}
      <Html2React html={post.content.rendered} />
    </div>
  );
};

export default connect(Page);

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;
  & > p {
    margin: 0;
  }
`;
