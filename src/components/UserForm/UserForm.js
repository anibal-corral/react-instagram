import React, { Fragment } from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { GermanShepered } from '../GermanShepered/GermanShepered'
import { Button, Error, Form, Input, Title } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <>
      <GermanShepered />
      
      <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
        {/* {... email} es para evitar poner value = {email.value} onchange = {email.onchange} */}
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' value={password.value} onChange={password.onChange} />
        <Button disabled={disabled}> {title} </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
