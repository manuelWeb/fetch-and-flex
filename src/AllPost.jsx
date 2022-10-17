import React, { useEffect, useState } from 'react';

const AllPost = ({ posts }) => {
  const [postsArray, setPostsArray] = useState(null)
  const [postsCommentArray, setPostsCommentArray] = useState(null)

  useEffect(() => {
    let isApiSubscribed = true;
    isApiSubscribed &&
      (async () => {
        // get posts
        const allPosts = posts.map(post => fetch(`https://jsonplaceholder.typicode.com/${post}`).then((response) => response.json()))
        Promise.all(allPosts).then((all) => { setPostsArray(all) })

        // get posts comments
        const allPostsComment = posts.map(post => fetch(`https://jsonplaceholder.typicode.com/${post}/comments`).then((response) => response.json()))
        Promise.all(allPostsComment).then((all) => { setPostsCommentArray(all) })
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
          <li key={id} className="row border-bottom m-4">
            <div className="col-8 border-end">
              <h1 className='fluide'>{title} </h1>
              <p className='m-0 mb-2'>
                {body}
              </p>
            </div>
            <div className="col d-flex flex-column justify-content-between">
              <div className="name">
                {postsCommentArray[0][0].name}
              </div>
              <div className="mail mb-2">
                {postsCommentArray[0][0].email}
              </div>
            </div>
          </li>
        ))}
      </ul>


    </div>
  );
};

export default AllPost;