import React from 'react'
import { Category } from '../Category/Category'
import { List, Item } from './style'
// Importing fake data
import data from '../../../api/db.json'

function CategoryList () {
    
  return (
    <List>
      {
        
                data.categories.map(category =>
                  <Item key={category.id}>
                    <Category {...category} />
                  </Item>
                )
            }
    </List>
  )
}

export { CategoryList }
