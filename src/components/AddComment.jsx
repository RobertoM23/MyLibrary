import React from 'react';
import { Form, Button } from 'react-bootstrap';
import AUTH_TOKEN from '../auth';

class AddComment extends React.Component {
  state = {
    comment: '',
    rate: '1'
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const commentData = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin
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
        this.setState({ comment: '', rate: '1' });
        this.props.onCommentAdded();
      } else {
        alert('Errore durante l\'invio del commento');
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="primary">Invia</Button>
      </Form>
    );
  }
}

export default AddComment;