import { useEffect, useState } from 'react'
import ComAddSesnor from '../components/AddSensor'
import Get_FeaturesAgent from '../../../services/get_FeaturesAgent'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'
import ComTableFeatures from '../../Home/Components/ComTableFeatures'
import Graphics from '../components/Graphics'

export function ViewSensors({ infoAgent }) {
  const [featuresAgent, setFeaturesAgent] = useState([])
  const { reloadFeatures, setReloadFeatures,datesGraf} = useDetallesConext()

  
  useEffect(() => {
    console.log('efec sensores individuales')
    Get_FeaturesAgent(infoAgent.Id).then((datos) => setFeaturesAgent(datos))
    setReloadFeatures(false)
  }, [reloadFeatures])

  console.log(datesGraf)

  return (
    <>
      <div className="h-dvh overflow-y-scroll">
        <Graphics data={datesGraf}/>
        <div className="pt-2  m-[10px] bg-lime-500 dark:bg-gray-700 h-dvh">
          <ComAddSesnor infoagent={infoAgent} />
          <ComTableFeatures features={featuresAgent} reload={setReloadFeatures} />
        </div>
        
      </div>
    </>
  )
}

