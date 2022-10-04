import React, { useEffect, useState } from 'react';

const AllPost = ({ posts }) => {
  const [postsArray, setPostsArray] = useState(null)

  useEffect(() => {
    let isApiSubscribed = true;
    isApiSubscribed &&
      (async () => {
        const allPosts = posts.map(post => {
          return fetch(`https://jsonplaceholder.typicode.com/${post}`).then((response) => response.json())
        })
        Promise.all(allPosts)
          .then((all) => { setPostsArray(all) })
      })()
    console.log('useefct');
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, [posts])

  /* useEffect(() => {
    console.log('postsArray', postsArray);
  }, [postsArray]) */


  return (
    <div>
      <h1>Hello AllPost : </h1>
      <ul>
        {postsArray && postsArray.map(({ userId, id, title, body }) => (
          <li key={id}>
            <h6>{title} </h6>
            <p>
              {body}
            </p>
          </li>
        ))}
      </ul>


    </div>
  );
};

export default AllPost;