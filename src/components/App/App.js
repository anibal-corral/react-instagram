import React from 'react'
import { CategoryList } from '../CategoryList/CategoryList'
import { GlobalStyle } from '../../GlobalStyles'
import { PhotoCardList } from '../PhotoCardList/PhotoCardList'
import { Logo } from '../Logo/Logo'
function App () {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <CategoryList />
      <PhotoCardList />
    </>

  )
}

export { App }
