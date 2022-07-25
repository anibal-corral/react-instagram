import React from 'react'
import { Anchor, Image } from './style'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

function Category ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) {
  return (
    <Anchor to={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}

export { Category }
