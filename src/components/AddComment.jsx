import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AUTH_TOKEN from '../auth';

const AddComment = ({ asin, onCommentAdded }) => {
  const [formData, setFormData] = useState({
    comment: '',
    rate: '1',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentData = {
      comment: formData.comment,
      rate: formData.rate,
      elementId: asin
    };

    try {
      const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_TOKEN
        }
      });

      if (res.ok) {
        setFormData({ comment: '', rate: '1' });
        onCommentAdded();
      } else {
        alert('Errore durante l\'invio del commento');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          type="text"
          value={formData.comment}
          onChange={(e) => handleChange('comment', e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={formData.rate}
          onChange={(e) => handleChange('rate', e.target.value)}
        >
          {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
        </Form.Select>
      </Form.Group>
      <Button type="submit" variant="primary">Invia</Button>
    </Form>
  );
};

export default AddComment;