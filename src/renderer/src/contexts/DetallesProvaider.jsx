import React, { useState, useContext } from 'react'

export const DetallesContext = React.createContext()

export function useDetallesConext() {
  return useContext(DetallesContext)
}

const model = {
  data: {
    datagrafic: [
      {
        name: '',
        values: [0, 0],
        date: ['', ''],
        time: ['', ''],
        stadistics: {
          min: 0,
          max: 0,
          avg: 0
        }
      }
    ]
  }
}

export function DetallesProvaider(props) {
  const [openAddSesnor, setAddSesnor] = useState(true)
  const [reloadFeatures, setReloadFeatures] = useState(false)
  const [infoAgent, setInfoAgent] = useState([])
  const [reloadActive, setReloadactive] = useState(false)
  const [datesGraf, setDatesgraf] = useState(model)
  const [reloadalarms, setReloadalarms] = useState(false)
  const [datasensor, setDatasensor] = useState({ id_adminis: 0, id_agent: 0, id_sensor: null })

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
    setDatesgraf,
    reloadalarms,
    setReloadalarms,
    datasensor,
    setDatasensor
  }

  return (
    <DetallesContext.Provider value={contextutilities}>{props.children}</DetallesContext.Provider>
  )
}
