import React from 'react'
import { CategoryList } from '../CategoryList/CategoryList'
import { GlobalStyle } from '../../GlobalStyles'
import { PhotoCardList } from '../PhotoCardList/PhotoCardList'
function App () {
  return (
    <>
      <GlobalStyle />
      <CategoryList />
      <PhotoCardList />
    </>

  )
}

export { App }
