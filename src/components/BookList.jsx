import { Row, Col, Container } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = ({ books, onBookSelect, selectedAsin }) => (
  <Container fluid>
    <h2 className="text-center mb-4">Fantasy</h2>
    <Row className="justify-content-center">
      {books.map(book => (
        <Col
          key={book.asin}
          xs={12} sm={6} md={4} lg={3}
          className="mb-4 d-flex justify-content-center"
        >
          <SingleBook
            book={book}
            isSelected={selectedAsin === book.asin}
            onClick={() => onBookSelect(book.asin)}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;