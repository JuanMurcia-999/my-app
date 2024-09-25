import { useEffect, useState } from 'react'
import { GetAlarm } from '../../../services/Services-view-alarms'
import TableAlarms from '../components/tableAlarms'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'
import { useParams } from 'react-router'
export function Alarms() {
  const [alarms, setAlarms] = useState([])
  const { reloadalarms, setReloadalarms } = useDetallesConext()
  const {Id} = useParams()
  useEffect(() => {
    GetAlarm(Id).then((data) => {
      setAlarms(data)
    })
  }, [reloadalarms])

  return (
    <>
      <div>
        <TableAlarms Alarms={alarms} />
      </div>
    </>
  )
}
