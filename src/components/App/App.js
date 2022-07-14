import React from 'react'
import { CategoryList } from '../CategoryList/CategoryList'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { PhotoCardListContainer } from '../../containers/PhotoCardListContainer'
import { Logo } from '../Logo/Logo'

function App () {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <CategoryList />
      <PhotoCardListContainer categoryId={2} />
    </>

  )
}

export { App }
