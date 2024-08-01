import { Tabs } from 'flowbite-react'
import { HiUserCircle } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import { ViewInfo } from './views/info'
import {ViewSensors}  from './views/Sensors'
import { DetallesProvaider } from '../../contexts/DetallesProvaider'
import { useParams } from 'react-router'


export default function Detalles() {
  let agent = useParams()
  
  return (
    <>
    <DetallesProvaider>
    <Tabs aria-label="Default tabs" variant="default" className='mt-[10px]'>
      <Tabs.Item active title="General" icon={HiUserCircle}>
        <ViewInfo />
      </Tabs.Item>

      <Tabs.Item title="Sensores" icon={MdDashboard}>
        <ViewSensors infoAgent={agent} />
      </Tabs.Item>
    </Tabs>
    </DetallesProvaider>
</>
  )
}
