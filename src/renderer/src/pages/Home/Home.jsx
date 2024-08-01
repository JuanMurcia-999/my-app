import ComTable from './Components/table'
import ListOfAgents from './Components/ListOfagents'
import { useEffect, useState } from 'react'
import Getagents from '../../services/get-agents'
import { Button } from 'flowbite-react'
import { CiViewTable } from 'react-icons/ci'
import { PiCards } from 'react-icons/pi'
import { useHomeContext } from '../../contexts/HomeProvaider'
import { toast} from 'sonner';
import Get_AllFeatures from '../../services/get-AllFeatures'
import ComTableFeatures from './Components/ComTableFeatures'


export default function Home() {
  const [agents, setAgents] = useState([])
  const [features, setFeatures] = useState([])
  const [view, setView] = useState(true)
  const [icon, setIcon] = useState(false)
  const { reloadAgents, setReloadAgents } = useHomeContext()

  useEffect(() => {
    console.log('efecto agentes')
    Getagents().then((datos) => setAgents(datos))
    Get_AllFeatures().then((datos) => setFeatures(datos))
    setReloadAgents(false)
  }, [reloadAgents])


  const handleChange = (event) => {
    setView(!view)
    setIcon(!icon)
  }
  
  

  return (
    <>
      <div className="flex flex-col z-20 pt-2 mt-[2rem] mr-[10px] h-[100vh] bg-white  dark:bg-gray-700">
        <Button className="w-[50px] ml-[30px]" onClick={handleChange} color="dark">
          {icon ? <PiCards /> : <CiViewTable />}
        </Button>
        {view ? <ListOfAgents agents={agents} /> : <ComTable agents={agents} />}
        <span> Todos los sensores</span>
        <ComTableFeatures features={features}  reload={setReloadAgents}/>
      </div>
      
    </>
  )
}
