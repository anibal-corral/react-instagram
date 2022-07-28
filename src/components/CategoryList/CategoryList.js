import React, { useEffect, useState } from 'react'
import { Category } from '../Category/Category'
import { List, Item } from './style'

// Custom Hook for getting data from API
function useCategorieData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(function () {
    setLoading(true)
    fetch('https://petgram-server-aecs-anibal-corral.vercel.app/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return { categories, loading }
}

const CategoryListComponent = () => {
  const { categories, loading } = useCategorieData()
  if (loading) {
    return 'Loading Categories ...'
  }
  return (
    <List>
      {

                categories.map(category =>
                  <Item key={category.id}>
                    <Category {...category} path={`/pet/${category.id}`} />
                  </Item>
                )
            }
    </List>
  )
}

function CategoryList1 () {
  const { categories, loading } = useCategorieData()
  if (loading) {
    return 'Loading Categories ...'
  }
  return (
    <List>
      {

                categories.map(category =>
                  <Item key={category.id}>
                    <Category {...category} path={`/pet/${category.id}`} />
                  </Item>
                )
            }
    </List>
  )
}

// export { CategoryList }
export const CategoryList = React.memo(CategoryListComponent)
