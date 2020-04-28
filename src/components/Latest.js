import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

// function blurbText() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         onClick={() => setOpen(!open)}
//         aria-controls="additional-text"
//         aria-expanded={open}
//       >
//         click
//       </Button>
//       <Collapse in={open}>
//         <div id="blurb-text">
//           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//           terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//           labore wes anderson cred nesciunt sapiente ea proident.
//         </div>
//       </Collapse>
//     </>
//   );
// }

// render(<blurbText />);

class Latest extends React.Component {

    render()
        {

        return (

            <div>
            
            <Container>
                <Row>

                <Col>
                    
                    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src={require('./img/russell-hornsby2.jpg')} />
  <Card.Body>
    <Card.Title>Russel Hornsby -- I Make it Funky </Card.Title>
    <Card.Subtitle>Friday, 24 Apr 2020</Card.Subtitle>
    <Card.Text>
    This is a Friday Patreon Exclusive! Go to patreon.com/toureshow to hear the whole ep! For $5 a month you get 4 Patreon Exclusives a month! Patreon.com/toureshow Instagram: @toureshow Twitter: @toure For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a>
    {/* For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a> */}
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>
                    <Col>
                    
                    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src={require('./img/jeffrey-wright_by_gs1.jpg')} />
  <Card.Body>
    <Card.Title>Jeffrey Wright -- I'm an Actor </Card.Title>
    <Card.Subtitle>Wed, 22 Apr 2020 07:03:00</Card.Subtitle>
    <Card.Text>
    He’s an amazing actor who can play any role—right now he’s on HBO’s Westworld and making the new Batman. And he’s a Brooklyn guy who’s working on helping some great local restaurants get meals to several Brooklyn hospitals.
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                    <Col>
                    
                    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src={require('./img/jessica-care-moore-gannett.png')} />
  <Card.Body>
    <Card.Title>Jessica Care Moore -- I Am Poetry</Card.Title>
    <Card.Subtitle>Fri, 17 Apr 2020 07:03:00</Card.Subtitle>
    <Card.Text>
    This is a Friday Patreon Exclusive! Go to patreon.com/toureshow to hear the whole ep! For $5 a month you get 4 Patreon Exclusives a month! Patreon.com/toureshow Instagram: @toureshow Twitter: @toure For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a>
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                </Row>

                <Row>
                <Col>
                    
                    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src={require('./img/tayarisha_poe.jpg')} />
  <Card.Body>
    <Card.Title>Tayarisha Poe -- I Direct Movies </Card.Title>
    <Card.Subtitle>Wed, 15 Apr 2020 07:03:00</Card.Subtitle>
    <Card.Text>
    Tayarisha Poe is the director of Selah And The Spades (on Amazon) which is a brilliant film about cliques in a private school and the badass Black girl who runs the whole social ecosystem. 
    {/* For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a> */}
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                <Col>
                    
                    <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src={require('./img/mitchell_s_jackson.jpg')} />
  <Card.Body>
    <Card.Title>Mitchell S. Jackson -- I'm a Survivor </Card.Title>
    <Card.Subtitle>Fri, 10 Apr 2020 07:03:00</Card.Subtitle>
    <Card.Text>
    This is a Friday Patreon Exclusive! Go to patreon.com/toureshow to hear the whole ep! For $5 a month you get 4 Patreon Exclusives a month! Patreon.com/toureshow Instagram: @toureshow Twitter: @toure &nbsp; 
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
