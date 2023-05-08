import React from "react";

type Props = {};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
};

const page = async (props: Props) => {
  const posts: Post[] = await getData();
  return (
    <div>
      <h2>dashboard page</h2>
      <div>
        {posts.map((post) => (
          <div>{post.title}</div>
        ))}
      </div>
    </div>
  );
};

export default page;
