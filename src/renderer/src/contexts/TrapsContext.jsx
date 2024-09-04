import React, { useState, useContext} from 'react'

export const TrapContext = React.createContext()

export function useTrapsContext() {
  return useContext(TrapContext)
}

export function Trapsprovaider(props) {
  const [message, setMessage] = useState('')

  const contextutilities = {
    message,
    setMessage
  }

  return <TrapContext.Provider value={contextutilities}>{props.children}</TrapContext.Provider>
}
