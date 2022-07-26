import React from 'react'
import { UserForm } from '../components/UserForm/UserForm'
import Context from '../Context'
export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
            ({ activateAuth }) => {
              return (
                <UserForm onSubmit={activateAuth} />

              )
            }
        }
    </Context.Consumer>
  )
}
