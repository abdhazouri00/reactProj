import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import classes from "./PostsList.module.css";
import { useEffect } from "react";

function PostList() {
  const posts = useLoaderData();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prevPost) => [postData, ...prevPost]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((e) => (
            <Post key={e.body} author={e.author} body={e.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostList;
