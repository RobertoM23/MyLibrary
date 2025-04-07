import React from 'react';
import { Button } from 'react-bootstrap';
import AUTH_TOKEN from '../auth';

const SingleComment = ({ comment, onDelete }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Sei sicuro di voler cancellare questo commento?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      if (res.ok) {
        onDelete();
      } else {
        alert('Errore nella cancellazione del commento');
      }
    } catch (err) {
      console.error('Errore:', err);
    }
  };

  return (
    <li className="mb-2 d-flex justify-content-between align-items-center">
      <div>
        <strong>{comment.author || 'Anonimo'}:</strong> {comment.comment}
        <div>⭐ {comment.rate}/5</div>
      </div>
      <Button variant="danger" size="sm" onClick={handleDelete}>
        Elimina
      </Button>
    </li>
  );
};

export default SingleComment;