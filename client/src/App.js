import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Routes from './routes'
import { Provider } from 'react-redux'

import store from './store'

import Loading from './components/loading'
import './styles.css'

export default function App () {
  // const redux = useSelector(state => state)
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <main className='content'>
          <Routes />
          <Loading />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}
