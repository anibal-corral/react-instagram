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
                    (register, { data, loading, error }) => {
                      const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        register({ variables }).then(activateAuth)
                      }
                      const errorMsg = error && 'User already exists'

                      return (
                        <UserForm disabled = {loading} title='Register' error={errorMsg} onSubmit={onSubmit} />

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
