import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const variantNumber = 13; 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Завантаження відгуків...</p>;
  }

  return (
    <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Employer Reviews</h2>
      {comments.map((comment) => (
        <div 
          key={comment.id} 
          style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '15px', 
            marginBottom: '10px',
            textAlign: 'left'
          }}
        >
          <h4 style={{ margin: '0 0 5px 0' }}>{comment.name}</h4>
          <small style={{ color: '#666' }}>Email: {comment.email}</small>
          <p style={{ marginTop: '8px', marginBottom: '0' }}>{comment.body}</p>
        </div>
      ))}
    </section>
  );
};

export default Reviews;