import {Card, Col, Container, Row, Button} from 'react-bootstrap'
const Test = () => {
    return (
        
        <Container fluid="md mt-4 ml-3 mr-3"  >
            <Row>
                <Col>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatibus facilis modi iusto ut sed dignissimos laboriosam inventore illum vel!</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatibus facilis modi iusto ut sed dignissimos laboriosam inventore illum vel!</p>
                </Col>
                <Col>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatibus facilis modi iusto ut sed dignissimos laboriosam inventore illum vel!</p>
                </Col>
                <Col>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatibus facilis modi iusto ut sed dignissimos laboriosam inventore illum vel!</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col lg="6">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg="6">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
        </Container>
    );
};

export default Test;