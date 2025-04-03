import { Row, Col, Container } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = ({ books }) => (
  <Container fluid className="py-4">
    <h2 className="text-center mb-4">Fantasy</h2>
    <Row className="justify-content-center">
      {books.map(book => (
        <Col
          key={book.asin}
          xs={12}      
          sm={10}      
          md={6}       
          lg={4}       
          className="mb-4 d-flex justify-content-center"
        >
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;