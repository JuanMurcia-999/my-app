import React, { useState, useContext , memo} from 'react'

export const HomeContext = React.createContext()

export  function useHomeContext() {
  return useContext(HomeContext)
}

export function Homeprovaider(props) {
  const [user, setUser] = useState(null)
  const [accion, setAccion] = useState(null)
  const [reloadAgents, setReloadAgents] = useState(true)
  const [confirmDelete,setConfirmDelete] =useState(false)
  const contextutilities = {
    user,
    setUser,
    accion,
    setAccion,
    reloadAgents,
    setReloadAgents,
    confirmDelete,
    setConfirmDelete
  }

  return <HomeContext.Provider value={contextutilities}>{props.children}</HomeContext.Provider>
}
