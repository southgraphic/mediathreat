import React from 'react'; 
// import ReactDOM from 'react-dom';
import ExpandBlurb from './ExpandBlurb.js'
import { Badge, Button, Card, Col, Container, Pagination, Row } from 'react-bootstrap';
class Latest extends React.Component {

    render()
        {

        return (

            <div>
            <Container fluid className="news-section">

              <Row>
                <Col>
               <hr/>
              <h2>Latest Podcasts&nbsp;<Badge variant="info">NEW!</Badge></h2>
                </Col>
              </Row>
            </Container>
            <Container fluid className="podcast-section">
                <Row>

                <Col>
                    
                    <Card style={{ width: '24rem' }}>
  <Card.Img variant="top" src={require('./img/russell-hornsby2.jpg')} />
  <Card.Body>
    <Card.Title>Russel Hornsby &mdash; I Make it Funky </Card.Title>
    <Card.Subtitle>Friday, 24 Apr 2020</Card.Subtitle>
    <Card.Text>
      
    This is a Friday Patreon Exclusive! Go to patreon.com/toureshow to hear the whole ep! For $5 a month you get 4 Patreon Exclusives a month! Patreon.com/toureshow Instagram: @toureshow Twitter: @toure For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a>
    {/* For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a> */}
    </Card.Text>
    <ExpandBlurb/>
  </Card.Body>
</Card>

                    </Col>
                    <Col>
                    
                    <Card style={{ width: '24rem' }}>
  <Card.Img variant="top" src={require('./img/jeffrey-wright_by_gs1.jpg')} />
  <Card.Body>
    <Card.Title>Jeffrey Wright &mdash; I'm an Actor </Card.Title>
    <Card.Subtitle>Wed, 22 Apr 2020 07:03 GMT</Card.Subtitle>
    <Card.Text>
    He’s an amazing actor who can play any role&mdash;right now he’s on HBO’s Westworld and making the new Batman. And he’s a Brooklyn guy who’s working on helping some great local restaurants get meals to several Brooklyn hospitals.
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                    <Col>
                    
                    <Card style={{ width: '24rem' }}>
  <Card.Img variant="top" src={require('./img/jessica-care-moore_gannett.png')} />
  <Card.Body>
    <Card.Title>Jessica Care Moore &mdash; I Am Poetry</Card.Title>
    <Card.Subtitle>Fri, 17 Apr 2020 07:03 GMT</Card.Subtitle>
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
                    
                    <Card style={{ width: '24rem' }}>
  <Card.Img variant="top" src={require('./img/tayarisha_poe.jpg')} />
  <Card.Body>
    <Card.Title>Tayarisha Poe &mdash; I Direct Movies </Card.Title>
    <Card.Subtitle>Wed, 15 Apr 2020 07:03 GMT</Card.Subtitle>
    <Card.Text>
    Tayarisha Poe is the director of Selah And The Spades (on Amazon) which is a brilliant film about cliques in a private school and the badass Black girl who runs the whole social ecosystem. 
    {/* For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a> */}
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                <Col>
                    
                    <Card style={{ width: '24rem' }}>
  <Card.Img variant="top" src={require('./img/mitchell_s_jackson.jpg')} />
  <Card.Body>
    <Card.Title>Mitchell S. Jackson &mdash; I'm a Survivor </Card.Title>
    <Card.Subtitle>Fri, 10 Apr 2020 07:03 GMT</Card.Subtitle>
    <Card.Text>
    This is a Friday Patreon Exclusive! Go to patreon.com/toureshow to hear the whole ep! For $5 a month you get 4 Patreon Exclusives a month! Patreon.com/toureshow Instagram: @toureshow Twitter: @toure &nbsp; 
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>

                    </Col>

                    <Col>
                    
                    <Card style={{ width: '24rem' }}>
  <Card.Img variant="top" src={require('./img/cops-corona.jpg')} />
  <Card.Body>
    <Card.Title>Policing During Corona</Card.Title>
    <Card.Subtitle>Wed, 08 Apr 2020 07:03 GMT</Card.Subtitle>
    <Card.Text>
    In the frightening era of Coronavirus, the NYPD are on the front lines helping fight this battle. My friend Lt. Edwin Raymond polices in Brooklyn and says he normally encounters 3 dead bodies a week but nowadays he’s seeing 9 or 10 dead bodies a week.
    {/* For information regarding your data privacy, visit <a href="http://acast.com/privacy">Privacy</a> */}
    </Card.Text>
    <ExpandBlurb />
    {/* <Button variant="secondary">Read more</Button> */}
  </Card.Body>
</Card>

                    </Col>

                </Row>
    
    <Row className="d-flex align-items-center">
      <Col>
      <Container>
      <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item active>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Item>{6}</Pagination.Item>
  <Pagination.Item>{7}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
</Container>
      </Col>
    </Row>
                
            </Container>
          
       </div>

        )
    }
};

export default Latest;
