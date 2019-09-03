import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Spinner from 'react-spinkit'

export default function Loading () {
  const redux = useSelector(state => state)

  useEffect(
    () => {
      console.log(redux, 'loading')
    },
    [redux]
  )

  return redux.loading ? (
    <div className='overlay-content'>
      <div className='wrapper'>
        <Spinner name='pacman' fadeIn='none' color='yellow' />
        <span className='message'>{'message'}</span>
      </div>
    </div>
  ) : null
}
