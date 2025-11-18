import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import libri from "../data/scifi.json";

const Scifi = function () {
  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h1 className="text-center">I migliori libri di {libri[0].category}  del mondo</h1>
          </Col>
          <Col xs={12} md={8} lg={6}>
            {libri.map((libro) => {
              return (
                <Card key={libro.asin} >
                  <Card.Img variant="top" src={libro.img} />
                  <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Text>Prezzo: {libro.price} €</Card.Text>
                    <Button variant="danger">Aggiungi al carrello</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Scifi;
