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
    He’s an amazing actor who can play any role—right now he’s on HBO’s Westworld and making the new Batman. And he’s a Brooklyn guy who’s working on helping some great local restaurants get meals to several Brooklyn hospitals.
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                    <Col>
                    
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('./img/jessica-care-moore-gannett.png')} />
  <Card.Body>
    <Card.Title>Jessica Care Moore</Card.Title>
    <Card.Text>
    This is a Friday Patreon Exclusive! Go to patreon.com/toureshow to hear the whole ep! For $5 a month you get 4 Patreon Exclusives a month! Patreon.com/toureshow Instagram: @toureshow Twitter: @toure For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a>
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                    <Col>
                    
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={require('./img/jessica-care-moore-gannett.png')} />
  <Card.Body>
    <Card.Title>Tayarisha Poe</Card.Title>
    <Card.Text>
    Tayarisha Poe is the director of Selah And The Spades (on Amazon) which is a brilliant film about cliques in a private school and the badass Black girl who runs the whole social ecosystem. For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a>
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                </Row>

                <Row>
                    

                </Row>
                
            </Container>
          
       </div>

        )
    }
};

export default Latest;
