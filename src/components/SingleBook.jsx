import { Card } from 'react-bootstrap';

const SingleBook = ({ book, isSelected, onClick }) => (
  <Card
    onClick={onClick}
    style={{
      border: isSelected ? '3px solid red' : '1px solid lightgray',
      cursor: 'pointer',
      width: '200px'
    }}
  >
    <Card.Img variant="top" src={book.img} style={{ height: '300px', objectFit: 'cover' }} />
    <Card.Body>
      <Card.Title style={{ fontSize: '1rem' }}>{book.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default SingleBook;