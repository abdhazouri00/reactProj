import Post from "./Post";
import { useState, useEffect } from "react";
import classes from "./PostsList.module.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
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
      {/* {isPosting && posts.length < 1 && !isFetching ? (
        <Modal hideModalHandler={onStopPosting} isPosting={isPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null} */}

      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((e) => (
            <Post key={e.body} author={e.author} body={e.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>start adding some</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts ...</p>
        </div>
      )}
    </>
  );
}

export default PostList;
