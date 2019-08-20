import React, { Component } from 'react'
import Login from '../login'
import { FaUser, FaWindowClose } from 'react-icons/fa'
import './styles.css'
import {
  Navbar,
  NavDropdown,
  // FormControl,
  Nav,
  Button,
  // Form,
  Modal
} from 'react-bootstrap'

export default class Header extends Component {
  state = {
    show: false,
    isAuthenticated: !!localStorage.getItem('credentials')
  }

  handle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  logout = () => {
    localStorage.clear()
  }

  render () {
    const { show, isAuthenticated } = this.state
    return (
      <header id='main-header'>
        <Modal show={show} onHide={this.handle}>
          <Modal.Header closeButton>
            <Modal.Title>Autenticação</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handle}>
              <FaWindowClose /> Fechar
            </Button>
          </Modal.Footer>
        </Modal>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link onClick={this.handle}>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              {!isAuthenticated ? (
                <Nav.Link onClick={this.handle}>
                  <FaUser /> Entrar
                </Nav.Link>
              ) : (
                <Nav.Link onClick={this.logout}>
                  <FaUser /> Sair
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
