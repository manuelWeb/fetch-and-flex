import React, { useEffect, useState } from 'react';

const AllPost = ({ posts }) => {
  const [postsArray, setPostsArray] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const allPosts = posts.map(post => {
        return fetch(`https://jsonplaceholder.typicode.com/${post}`).then((response) => response.json())
      })
      const all = await Promise.all(allPosts)
      setPostsArray(all)
    }
    fetchPost()
  }, [])

  useEffect(() => {
    console.log('postsArray', postsArray);
  }, [postsArray])


  return (
    <div>
      <h1>Hello AllPost : </h1>
      <ul>
        {posts.map((i, x) => (
          <li key={x}>{i}</li>
        ))}
      </ul>


    </div>
  );
};

export default AllPost;