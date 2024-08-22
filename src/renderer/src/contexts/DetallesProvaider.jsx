import React, { useState, useContext } from 'react'

export const DetallesContext = React.createContext()

export function useDetallesConext() {
  return useContext(DetallesContext)
}

export function DetallesProvaider(props) {
  const [openAddSesnor, setAddSesnor] = useState(true)
  const [reloadFeatures, setReloadFeatures] = useState(false)
  const [infoAgent, setInfoAgent] = useState([])
  const [reloadActive, setReloadactive] = useState(false)
  const [datesGraf, setDatesgraf] = useState([{ created_at: '2024-08-12', value: 0 }])

  const contextutilities = {
    openAddSesnor,
    setAddSesnor,
    infoAgent,
    setInfoAgent,
    reloadFeatures,
    setReloadFeatures,
    reloadActive,
    setReloadactive,
    datesGraf,
    setDatesgraf
  }

  return (
    <DetallesContext.Provider value={contextutilities}>{props.children}</DetallesContext.Provider>
  )
}
