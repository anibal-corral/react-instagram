import React, { Fragment } from 'react'
import { CategoryList } from '../CategoryList/CategoryList'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { PhotoCardListContainer } from '../../containers/PhotoCardListContainer.js'
import { PhotoCardWithQuery } from '../../containers/PhotoCardWithQuery'
import { Logo } from '../Logo/Logo'

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
          : <>
            <CategoryList />
            <PhotoCardListContainer categoryId={2} />
            </>
      }

    </>

  )
}

export { App }
