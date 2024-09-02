import { useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router'
import Get_iftable from '../../../services/get-iftable'
import TableIftable from '../components/TableifTable'
import { Availabletaskdefault, Activetaskdefault } from '../../../services/Default_task'
import TabledefaultTasks from '../components/tableDefaultTasks'
import { ModalInterfaces } from '../components/Modal-interfaces'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'

export function ViewInfo({ infoAgent }) {
  let { Ip, Id, Host, type } = useParams()
  const [iftable, setIftable] = useState([])
  const [availabletasks, setAvailabletasks] = useState([])
  const [activetasks, setActivetasks] = useState([])
  const { reloadActive } = useDetallesConext()


  useEffect(() => {
    Availabletaskdefault(type, Id).then((datos) => setAvailabletasks(datos))
    Activetaskdefault(type, Id).then((datos) => setActivetasks(datos))
  }, [reloadActive,type,Id])



  useEffect(() => {
    
  
    console.log('efect todos los sensores')
    Get_iftable(Ip).then((datos) => setIftable(datos))

    
  }, [])



  return (
    <>
      <div className="h-dvh overflow-y-scroll scrollbar-hide">
        <span class="self-center whitespace-nowrap bg-slate-100w-[98%] text-xl font-semibold dark:text-white">
          Interfaces
        </span>
        <div className="flex justify-center">
          <ModalInterfaces infoagent={infoAgent} />

          <TableIftable interfaces={iftable} />
        </div>
        <span class="self-center whitespace-nowrap bg-slate-100w-[98%] text-xl font-semibold dark:text-white">
          Sensores disponibles
        </span>
        <div className=" flex justify-center pt-2  m-[10px] bg-slate-100 dark:bg-gray-700 h-dvh">
          <TabledefaultTasks
            Sensors={availabletasks}
            Mode={true}
            infoAgent={{ Ip, Id, Host, type }}
          />
          <TabledefaultTasks
            Sensors={activetasks}
            Mode={false}
            infoAgent={{ Ip, Id, Host, type }}
          />
        </div>
      </div>
    </>
  )
}
