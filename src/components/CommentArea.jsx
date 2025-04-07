import React from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import AUTH_TOKEN from '../auth';

class CommentArea extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    if (!this.props.asin) return;
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization: AUTH_TOKEN
        }
      });
      const data = await res.json();
      this.setState({ comments: data });
    } catch (error) {
      console.error('Errore nel fetch dei commenti:', error);
    }
  };

  render() {
    return (
      <div className="mt-2">
        <CommentsList comments={this.state.comments} onDelete={this.fetchComments} />
        <AddComment asin={this.props.asin} onCommentAdded={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;