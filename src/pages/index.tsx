import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
}

export default function Home({ posts }: HomeProps) {
  // const[posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   fetch('http://localhost:3333/posts').then((response) => response.json().then((data) => setPosts(data)));
  // }, [])
  
  return (
    <div>
    <h1>Posts</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    </div>
  )
}

interface HomeProps {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> =  async (context) => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
