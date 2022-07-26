import React from 'react'
import Context from '../Context'
export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
            ({ activateAuth }) => {
              console.log(activateAuth)
              return (
                <form onSubmit={activateAuth}>
                  <button> Login </button>
                </form>

              )
            }
        }
    </Context.Consumer>
  )
}
