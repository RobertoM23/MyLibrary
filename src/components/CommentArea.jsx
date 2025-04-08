import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import AUTH_TOKEN from '../auth';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    if (!asin) return;
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization: AUTH_TOKEN
        }
      });
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error('Errore nel fetch dei commenti:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [asin]);

  return (
    <div className="mt-2">
      <CommentsList comments={comments} onDelete={fetchComments} />
      <AddComment asin={asin} onCommentAdded={fetchComments} />
    </div>
  );
};

export default CommentArea;