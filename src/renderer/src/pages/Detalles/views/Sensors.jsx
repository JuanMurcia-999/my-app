import { useEffect,useState } from 'react'
import ComAddSesnor from '../components/AddSensor'
import Get_FeaturesAgent from '../../../services/get_FeaturesAgent'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'
import ComTableFeatures from '../../Home/Components/ComTableFeatures'
import Graphics from '../components/Graphics'

export function ViewSensors({ infoAgent }) {
  const [featuresAgent, setFeaturesAgent] = useState([])
  const {reloadFeatures, setReloadFeatures} = useDetallesConext()
  useEffect(() => {
    console.log('efec sensores individuales')
    Get_FeaturesAgent(infoAgent.Ip).then((datos) => setFeaturesAgent(datos))
    setReloadFeatures(false)
  }, [reloadFeatures])


  return (
    <>
    <Graphics/>
    <div className="flex flex-col z-20 pt-2 mt-[2rem] mr-[10px] h-[100vh] bg-white  dark:bg-gray-700">
      
        <ComAddSesnor infoagent={infoAgent} />
        <ComTableFeatures features={featuresAgent} reload={setReloadFeatures}/>
    </div>
  </>)
}
//<TableFeatures features={featuresAgent}/>