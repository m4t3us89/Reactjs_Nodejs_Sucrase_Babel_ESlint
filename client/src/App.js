import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Routes from './routes'
import './styles.css'

export default () => {
  return (
    <div className='App'>
      <Header />
      <main className='content'>
        <Routes />
      </main>
      <Footer />
    </div>
  )
}
