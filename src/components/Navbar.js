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
              <Nav.Link href="#features">Episodes</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            <Form inline>
              <h5>Search</h5>
              <FormControl type="text" placeholder="Search Episodes" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          
       </div>

        )
    }
};

export default NavBar;
