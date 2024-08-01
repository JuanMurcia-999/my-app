import { useEffect,useState } from 'react'
import ComAddSesnor from '../components/AddSensor'
import Get_FeaturesAgent from '../../../services/get_FeaturesAgent'
import TableFeatures from '../components/tableFeatures'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'

export function ViewSensors({ infoAgent }) {
  const [featuresAgent, setFeaturesAgent] = useState([])
  const {reloadFeatures, setReloadFeatures} = useDetallesConext()
  useEffect(() => {
    console.log('efec sensores individuales')
    Get_FeaturesAgent(infoAgent.Ip).then((datos) => setFeaturesAgent(datos))
    setReloadFeatures(false)
  }, [reloadFeatures])


  return (
    <div className="flex flex-col z-20 pt-2 mt-[2rem] mr-[10px] h-[100vh] bg-white  dark:bg-gray-700">
        <ComAddSesnor infoagent={infoAgent} />
        <TableFeatures features={featuresAgent}/>
    </div>
  )
}
