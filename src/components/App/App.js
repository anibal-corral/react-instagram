import React, { useContext } from 'react'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Logo } from '../Logo/Logo'
import { Home } from '../../pages/Home'
import { Router, Redirect } from '@reach/router'
import { NavBar } from '../NavBar/NavBar'
import { Favs } from '../../pages/Favs'
import { Detail } from '../../pages/Detail'
import { User } from '../../pages/User'
import { NotRegisteredUser } from '../../pages/NotRegisteredUser'
import { Context } from '../../Context'
import { NotFound } from '../../pages/NotFound'

function App () {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />

      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/user' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />

    </>

  )
}

export { App }
