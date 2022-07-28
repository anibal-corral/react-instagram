import React from 'react'
import { Nav, Link } from './styles'
import { FcHome, FcLikePlaceholder, FcAssistant } from 'react-icons/fc'
const SIZE = '32px'
export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><FcHome size={SIZE} /></Link>
      <Link to='/favs'><FcLikePlaceholder size={SIZE} /></Link>
      <Link to='/user'><FcAssistant size={SIZE} /></Link>
    </Nav>
  )
}
