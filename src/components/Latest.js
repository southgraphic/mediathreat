import React from 'react';
import ReactDOM from 'react-dom';
import jeffrey from './img/jeffrey-wright_by_gs1.jpg';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';


class Latest extends React.Component {

    render()
        {

        return (

            <div>
            
            <Container>
                <Row>
                    <Col>
                    
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('./img/jeffrey-wright_by_gs1.jpg')} />
  <Card.Body>
    <Card.Title>Jeffrey Wright</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                </Row>

                <Row>
                    <Col>
                    
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('./img/jessica-care-moore-gannett.png')} />
  <Card.Body>
    <Card.Title>Jeffrey Wright</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                </Row>
                
            </Container>
          
       </div>

        )
    }
};

export default Latest;
