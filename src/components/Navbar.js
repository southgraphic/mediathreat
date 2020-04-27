import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavBar extends React.Component {

    render()
        {

        return (

            <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">Toure Show Podcast</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          
       </div>

        )
    }
};

export default NavBar;
