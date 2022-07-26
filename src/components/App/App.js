import React from 'react'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Logo } from '../Logo/Logo'
import { Home } from '../../pages/Home'
import { Router } from '@reach/router'
import { NavBar } from '../NavBar/NavBar'
import { Favs } from '../../pages/Favs'
import { Detail } from '../../pages/Detail'
import { User } from '../../pages/User'
import { NotRegisteredUser } from '../../pages/NotRegisteredUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

function App () {
  return (
    <>
      <GlobalStyle />
      <Logo />

      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      
      </Router>
      <UserLogged>
        {
          ({ isAuth }) => 
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
          

        }

      </UserLogged>
      <NavBar />

    </>

  )
}

export { App }
