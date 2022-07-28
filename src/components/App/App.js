import React, { Suspense, useContext } from 'react'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Logo } from '../Logo/Logo'
// import { Home } from '../../pages/Home'
import { Router, Redirect } from '@reach/router'
import { NavBar } from '../NavBar/NavBar'
// import { Favs } from '../../pages/Favs'
// import { Detail } from '../../pages/Detail'
// import { User } from '../../pages/User'
import { NotRegisteredUser } from '../../pages/NotRegisteredUser'
import { Context } from '../../Context'
import { NotFound } from '../../pages/NotFound'

const Favs = React.lazy(() => import('../../pages/Favs'))
const Home = React.lazy(() => import('../../pages/Home'))
const Detail = React.lazy(() => import('../../pages/Detail'))
const User = React.lazy(() => import('../../pages/User'))
function App () {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div/>}>
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

    </Suspense>

  )
}

export { App }
