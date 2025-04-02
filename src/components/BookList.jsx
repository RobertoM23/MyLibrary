import { Row, Col, Container } from 'react-bootstrap';
import SingleBook from './SingleBook.jsx';

const BookList = ({ books }) => (
  <Container fluid className="py-4">
    <h2 className="text-center mb-4">Tutti i libri</h2>
    <Row className="justify-content-center">
      {books.map(book => (
        <Col key={book.asin} xs={10} sm={6} md={4} lg={3} xl={2} className="mb-4 d-flex justify-content-center">
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;