import { useState } from 'react';

const PostForm = ({ post = {}, onSubmit }) => {
  const [title, setTitle] = useState(post.title || '');
  const [body, setBody] = useState(post.body || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: post.id || Date.now(),
      title,
      body
    };
    onSubmit(newPost);
    if (!post.id) {
      setTitle('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row align-items-end">
        <div className="col-md-4 mb-3">
          <input id="title" className="form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        </div>
        <div className="col-md-6 mb-3">
          <textarea id="body" className="form-control" rows="1" value={body} onChange={e => setBody(e.target.value)} placeholder="Body" required />
        </div>
        <div className="col-md-2 mb-3 d-grid">
          <button className="btn btn-primary" type="submit">
            {post.id ? 'Update' : 'Add Post'}
          </button>
        </div>
      </div>
    </form>

  );
};

export default PostForm;

