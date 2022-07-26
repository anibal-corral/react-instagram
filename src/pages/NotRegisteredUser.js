import React, { Fragment } from 'react'
import { UserForm } from '../components/UserForm/UserForm'
import Context from '../Context'
export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
            ({ activateAuth }) => {
              return (
                <><UserForm title='Register' onSubmit={activateAuth} />
                  <UserForm title='Login' onSubmit={activateAuth} />
                </>

              )
            }
        }
    </Context.Consumer>
  )
}
