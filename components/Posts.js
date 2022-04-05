import React from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from './Post';
// import Post from "./Post";

const Posts = ({posts}) => {
    const [realTimePosts, setRealTimePosts] = useState([]);
    useEffect(
      () =>
        onSnapshot(
          query(collection(db, "posts"), orderBy("timestamp", "desc")),
          (snapshot) => setRealTimePosts(snapshot.docs)
        ),

      [db]
    );

  return (
    <div>
      {
      realTimePosts?
      realTimePosts.map((post) => {
        const { name, email, image, message, postImage, timestamp } =
          post.data();

        return (
          <Post
            key={post.id}
            {...post}
            id={post.id}
            name={name}
            image={image}
            message={message}
            postImage={postImage}
            timestamp={timestamp}
          />
        );
      }):
      posts.map(post=>{
        const { name, email, image, message, postImage, timestamp } =
          post.data();

        return (
          <Post
            key={post.id}
            {...post}
            id={post.id}
            name={name}
            image={image}
            message={message}
            postImage={postImage}
            timestamp={timestamp}
          />
        );
      })}
    </div>
  );
}

export default  Posts