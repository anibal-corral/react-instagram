import React, { Fragment } from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { GermanShepered } from '../GermanShepered/GermanShepered'
import { Button, Form, Input, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <>
      <GermanShepered />
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        {/* {... email} es para evitar poner value = {email.value} onchange = {email.onchange} */}
        <Input placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' value={password.value} onChange={password.onChange} />
        <Button> {title} </Button>
      </Form>
    </>
  )
}
