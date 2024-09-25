import ComTable from './Components/table'
import ListOfAgents from './Components/ListOfagents'
import { useEffect, useState } from 'react'
import Getagents from '../../services/Services-agent'
import { Button } from 'flowbite-react'
import { CiViewTable } from 'react-icons/ci'
import { PiCards } from 'react-icons/pi'
import { useHomeContext } from '../../contexts/HomeProvaider'

export default function Home() {
  const [agents, setAgents] = useState([])
  const [view, setView] = useState(true)
  const [icon, setIcon] = useState(false)
  const { reloadAgents } = useHomeContext()

  useEffect(() => {
    console.log('efecto agentes')
    Getagents().then((datos) => setAgents(datos))
  }, [reloadAgents])

  const handleChange = (event) => {
    setView(!view)
    setIcon(!icon)
  }

  return (
    <>
      <div className="flex flex-col z-20 pt-2 mt-[2rem] mr-[10px]  bg-slate-100  dark:bg-gray-700  overflow-y-auto">
        <div className="bg-slate-100 m-[10px] dark:bg-gray-700">
          <Button
            className="w-[50px] ml-[30px] mt-[10px] dark:bg-gray-900"
            onClick={handleChange}
            color="dark"
          >
            {icon ? <PiCards /> : <CiViewTable />}
          </Button>
          {view ? <ListOfAgents agents={agents} /> : <ComTable agents={agents} />}
        </div>

        <div className=" bg-slate-100 m-[10px] h-dvh  dark:bg-gray-700"></div>
      </div>
    </>
  )
}
