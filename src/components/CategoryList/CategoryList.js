import React, { useEffect, useState } from 'react'
import { Category } from '../Category/Category'
import { List, Item } from './style'

function CategoryList () {
  const [categories, setCategories] = useState([])
  useEffect(function () {
    fetch('https://petgram-server-aecs-anibal-corral.vercel.app/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
  }, [])
  return (
    <List>
      {

                categories.map(category =>
                  <Item key={category.id}>
                    <Category {...category} />
                  </Item>
                )
            }
    </List>
  )
}

export { CategoryList }
