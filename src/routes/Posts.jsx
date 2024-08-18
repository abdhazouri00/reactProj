import React from "react";
import { useState } from "react";
import PostsList from "../components/PostsList";
import "../style.css"
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
