import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.body}</p>
      </div>
    </div>
    
  );
};

export default PostDetails;
