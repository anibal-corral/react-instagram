import React, { Fragment, useContext } from 'react'
import { UserForm } from '../components/UserForm/UserForm'
import { Context } from '../Context'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'
export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (

    <>
      <RegisterMutation>
        {
                    (register, { data, loading, error }) => {
                      const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        register({ variables }).then(({ data }) => {
                          const { signup } = data
                          activateAuth(signup)
                        })
                      }
                      const errorMsg = error && 'User already exists'

                      return (
                        <UserForm disabled={loading} title='Register' error={errorMsg} onSubmit={onSubmit} />

                      )
                    }
                  }
      </RegisterMutation>
      <LoginMutation>
        {
                     (login, { data, loading, error }) => {
                       const onSubmit = ({ email, password }) => {
                         const input = { email, password }
                         const variables = { input }
                         login({ variables }).then(({ data }) => {
                           const { login } = data
                           activateAuth(login)
                         })
                       }
                       const errorMsg = error && 'Credentials error'
                       return (
                         <UserForm disabled={loading} error={errorMsg} title='Login' onSubmit={onSubmit} />
                       )
                     }
                  }
      </LoginMutation>

    </>
  )
}
