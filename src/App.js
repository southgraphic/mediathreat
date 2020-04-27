import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import NavBar from './components/Navbar.js';
import JumboTron from './components/Jumbotron.js';
import Latest from './components/Latest.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Container fluid>
          <Row>
            <Col>
            <NavBar />
            <JumboTron />
            <Latest />
            </Col>
          </Row>
        </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
