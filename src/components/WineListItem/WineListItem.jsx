import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './WineListItem.css';

export default function WineListItem({ wineItem, handleAddToOrder }) {
    return (
        <Container className="WineContainer">
            <Row>
                <Col xs={6} md={4}>
                    <Card className="WineCard" style={{ width: "18rem" }}>
                        <Card.Img className="wine-img" variant="top" src={wineItem.image} />
                        <Card.Body>
                            <Card.Title>{wineItem.name}</Card.Title>
                            <Card.Subtitle className="mb-2">{wineItem.winery}</Card.Subtitle>
                            <Card.Text>{wineItem.location}</Card.Text>
                            <Card.Text>${wineItem.price.toFixed(2)}</Card.Text>
                            <button className="btn-sm" onClick={() => 
                                handleAddToOrder(wineItem._id)}>
                                ADD
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}