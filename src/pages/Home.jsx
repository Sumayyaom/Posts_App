import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [dummyPosts, setDummyPosts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
        .then(res => setPosts(res.data))
        .catch(error => console.error('Error fetching posts:' ,error));
    },[]);

  const addNewPost = (post) => {
    setDummyPosts([post, ...dummyPosts]);
  }

  const updatePost = (updatedPost) => {
    setDummyPosts(dummyPosts.map(p =>p.id === updatedPost.id ? updatedPost : p));
  }

  const filterPosts = [...dummyPosts, ...posts].filter(p =>p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
        <h1>Posts</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <PostForm onSubmit={addNewPost} />
        <div className="container mt-4">
          <div className="row">
            {filterPosts.map(post => (
              <div key={post.id} className="col-md-6 mb-4">
                <PostCard
                  post={post}
                  isDummy={dummyPosts.some(dp => dp.id === post.id)}
                  onEdit={updatePost}
                />
              </div>
            ))}
          </div>
        </div>

    </div>
  )
}


export default Home