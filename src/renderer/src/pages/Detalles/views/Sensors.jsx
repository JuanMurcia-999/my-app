import { useEffect, useState } from 'react'
import ComAddSesnor from '../components/AddSensor'
import Get_FeaturesAgent from '../../../services/get_FeaturesAgent'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'
import ComTableFeatures from '../components/ComTableFeatures'
import MyChart from '../components/Mychart'
import { BarFilters } from '../components/BarFilters'
import Tablestadisticts from '../components/statdisticts'

export function ViewSensors({ infoAgent }) {
  const [featuresAgent, setFeaturesAgent] = useState([])
  const { reloadFeatures, setReloadFeatures, datesGraf,setTypegraf } = useDetallesConext()

  useEffect(() => {
    console.log('efec sensores individuales')
    Get_FeaturesAgent(infoAgent.Id).then((datos) => setFeaturesAgent(datos))
  }, [reloadFeatures])

  return (
    <>
      <ComAddSesnor infoagent={infoAgent} />
      <div className="h-dvh overflow-y-scroll scrollbar-hide">
        <div>
          <BarFilters infoAgent={infoAgent} />
        </div>
        <MyChart data={datesGraf} />

        <div className="pt-2  m-[10px] bg-slate-100 dark:bg-gray-700 h-dvh flex justify-center">
          <ComTableFeatures features={featuresAgent} infoagent={infoAgent} />
          <Tablestadisticts/>
        </div>
       
        
        
      </div>
    </>
  )
}
