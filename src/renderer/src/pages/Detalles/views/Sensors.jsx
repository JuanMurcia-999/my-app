import { useEffect, useState } from 'react'
import ComAddSesnor from '../components/AddSensor'
import Get_FeaturesAgent from '../../../services/get_FeaturesAgent'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'
import ComTableFeatures from '../components/ComTableFeatures'
import Graphics from '../components/Graphics'
import MyChart from '../components/Mychart'

export function ViewSensors({ infoAgent }) {
  const [featuresAgent, setFeaturesAgent] = useState([])
  const { reloadFeatures, setReloadFeatures, datesGraf } = useDetallesConext()

  useEffect(() => {
    console.log('efec sensores individuales')
    Get_FeaturesAgent(infoAgent.Id).then((datos) => setFeaturesAgent(datos))
  }, [reloadFeatures])

  return (
    <>
      <div className="h-dvh overflow-y-scroll scrollbar-hide ">
        <ComAddSesnor infoagent={infoAgent} />

        <MyChart labels={datesGraf.created_at} data={datesGraf.value} />
        <div className="pt-2  m-[10px] bg-slate-100 dark:bg-gray-700 h-dvh">
          <ComTableFeatures features={featuresAgent} infoagent={infoAgent} />
        </div>
      </div>
    </>
  )
}
