import { Link } from 'react-router-dom';
import { useState } from 'react';
import PostForm from './PostForm';

const PostCard = ({ post, isDummy, onEdit }) => {
  const [editing, setEditing] = useState(false);

  return editing ? (
    <PostForm post={post} onSubmit={(data) => {
      onEdit(data);
      setEditing(false);
    }} />
  ) : (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body.slice(0, 100)}...</p>
        {!isDummy && <Link to={`/posts/${post.id}`} className="btn btn-primary me-2">Read More</Link>}
        {isDummy && (
          <button onClick={() => setEditing(true)} className="btn btn-secondary">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCard;

