import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Get_iftable from '../../../services/get-iftable'
import TableIftable from '../components/TableifTable'
import { Alldefaultsensor } from '../../../services/all-sensor-default'
import Tabledefaultsensors from '../components/tableDefaultSensors'

export function ViewInfo() {
  let { Ip, Id, Host ,type} = useParams()
  const [iftable, setIftable] = useState([])
  const [defaultsensors, setDefaultsensors] = useState([])

  useEffect(() => {
    console.log('efect todos los sensores')
    Get_iftable(Ip).then((datos) => setIftable(datos))
    Alldefaultsensor(type).then((datos)=> setDefaultsensors(datos))

  }, [])
 

  return (
    <>
      <div className="flex flex-col z-20  m-[10px] h-[100vh] bg-pink-700  dark:bg-gray-700">
        <span class="self-center whitespace-nowrap bg-slate-800 w-[98%] text-xl font-semibold dark:text-white"> Interfaces</span>
        <TableIftable interfaces={iftable} />
        <span class="self-center whitespace-nowrap bg-slate-800 w-[98%] text-xl font-semibold dark:text-white">Sensores disponibles</span>
        <Tabledefaultsensors Sensors={defaultsensors} />
      </div>
    </>
  )
}
