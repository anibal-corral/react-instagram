import React, { Fragment } from 'react'
import { UserForm } from '../components/UserForm/UserForm'
import Context from '../Context'
import { RegisterMutation } from '../containers/RegisterMutation'
export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
            ({ activateAuth }) => {
              return (
                <>
                  <RegisterMutation>
                    {
                    (register) => {
                      const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        register({ variables }).then(activateAuth)
                      }
                      return (
                        <UserForm title='Register' onSubmit={onSubmit} />

                      )
                    }
                  }
                  </RegisterMutation>

                  <UserForm title='Login' onSubmit={activateAuth} />
                </>
              )
            }
        }
    </Context.Consumer>
  )
}
