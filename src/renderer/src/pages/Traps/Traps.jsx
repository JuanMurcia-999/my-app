import TableTraps from './components/TableTraps'

import { GetTraps } from '../../services/Services-view-traps'
import { useState, useEffect } from 'react'
import { Trapsprovaider } from '../../contexts/TrapsContext'
import Message from './components/message'

export default function Traps() {
  const [traps, setTraps] = useState([])

  useEffect(() => {
    console.log('efecto agentes')
    GetTraps().then((datos) => setTraps(datos))
  }, [])

  return (
    <>
      <Trapsprovaider>
        <div className="flex flex-col z-20 pt-2 mt-[2rem] mr-[60px] ml-[60px]  bg-slate-100 dark:bg-gray-700  ">
          <span class="self-center whitespace-nowrap bg-slate-100w-[98%] mb-[40px] text-xl font-semibold dark:text-white">
            Historial Traps
          </span>
          <div className=" flex justify-center">
            <div className="w-[45%] h-[40rem] ">
              <TableTraps Traps={traps} />
            </div>

            <Message />
          </div>
        </div>
      </Trapsprovaider>
    </>
  )
}
