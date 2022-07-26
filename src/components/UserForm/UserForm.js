import React, { useState } from 'react'
import { useInputValue } from '../../Hooks/useInputValue'


export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <form onSubmit={onSubmit}>
        {/* {... email} es para evitar poner value = {email.value} onchange = {email.onchange} */}
      <input placeholder='Email' {...email} /> 
      <input type='password' placeholder='Password' value={password.value} onChange={password.onChange} />
      <button> Login </button>
    </form>

  )
}
