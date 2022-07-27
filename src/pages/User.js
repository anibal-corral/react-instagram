import React, { useContext } from 'react'
import { SubmitButton } from '../components/SubmitButton/SubmitButton'
import { Context } from '../Context'
export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <><h1>User</h1>
      <SubmitButton onClick={removeAuth}>Logout </SubmitButton>
    </>

  )
}
