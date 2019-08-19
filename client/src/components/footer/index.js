import React from 'react'
import './styles.css'
import { Card } from 'react-bootstrap'
// import { Container } from './styles';

export default () => {
  return (
    <footer id='main-footer'>
      <Card className='text-center'>
        <Card.Footer className='text-muted'>
          Todos os Direitos Reservados.
        </Card.Footer>
      </Card>
    </footer>
  )
}
