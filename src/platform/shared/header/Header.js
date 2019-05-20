import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container, Row, Col} from 'reactstrap';

class Header extends React.Component {
  
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div>
        <Container style={{maxWidth:'100%', paddingTop:'20px', height:'130px'}}>
          <Row>
            <Col>
              <div style={{display:'inline-block', position:'relative', bottom:'132px'}}>
                <img src={logo} className="App-logo" alt="logo" style={{ width:'50px', heigth: '50px'}}/>
              </div>
              <div style={{display:'inline-block', position:'relative', bottom:'125px'}}>
                <Navbar color="faded" light>
                  <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                  <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                      <NavItem>
                        <Link to="/users">Users</Link>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            </Col>
          </Row>
        </Container>
      </div>  
    );
  }
} 

  


export default Header;
