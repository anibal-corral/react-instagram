import React from 'react'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { PhotoCardWithQuery } from '../../containers/PhotoCardWithQuery'
import { Logo } from '../Logo/Logo'
import { Home } from '../../pages/Home'
import { Router } from '@reach/router'

function App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
            </Router>
      }

    </>

  )
}

export { App }
