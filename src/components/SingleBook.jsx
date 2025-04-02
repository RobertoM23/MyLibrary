import { Card } from 'react-bootstrap';
import React from 'react';

class SingleBook extends React.Component {
  state = {
    selected: false
  };

  toggleSelection = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        onClick={this.toggleSelection}
        style={{
          width: '100%',
          maxWidth: '200px',
          border: selected ? '3px solid red' : '1px solid lightgray',
          cursor: 'pointer',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1rem' }}>{book.title}</Card.Title>
          <Card.Text>Prezzo: ${book.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;