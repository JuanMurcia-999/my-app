import React, { useState, useContext } from 'react'

export const DetallesContext = React.createContext()

export function useDetallesConext() {
  return useContext(DetallesContext)
}

export function DetallesProvaider(props) {
  const [openAddSesnor, setAddSesnor] = useState(true)
  const [reloadFeatures, setReloadFeatures] = useState(false)
  const [infoAgent, setInfoAgent] = useState([])

  const contextutilities = {
    openAddSesnor,
    setAddSesnor,
    infoAgent,
    setInfoAgent,
    reloadFeatures,
    setReloadFeatures
  }

  return (
    <DetallesContext.Provider value={contextutilities}>{props.children}</DetallesContext.Provider>
  )
}
