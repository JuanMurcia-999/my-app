import { Table ,Button} from 'flowbite-react'
import { IoMdAddCircleOutline,IoIosRemoveCircleOutline  } from 'react-icons/io'
import { Enable_task, Disable_task } from '../../../services/Action-task'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'

let Body ={
  name: "",
  nametask: "",
  params: {}
}

export default function TabledefaultTasks({ Sensors,Mode,infoAgent }) {
  const {reloadActive, setReloadactive}= useDetallesConext()

  const handleClick =(sensor)=>{
    Body.name= infoAgent.Host
    Body.nametask = sensor.fe_name
    Body.params = {
      timer:10,
      task:sensor.fe_name,
      id_feature: sensor.id_feature,
      id_agent:infoAgent.Id
    }

  if (Mode) {
    Enable_task(Body)
    setReloadactive(true)
    
  }else {
    Disable_task(Body)
    setReloadactive(true)
  }

}

  return (
    <>
      <div className="flex justify-center overflow-y-auto h-[20rem] m-12 ">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Nombre</Table.HeadCell>
            <Table.HeadCell>Tipo</Table.HeadCell>
            <Table.HeadCell>Agregar</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Sensors.map((sensor) => (
              <Table.Row
                key={sensor.id_feature}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {sensor.fe_name}
                </Table.Cell>

                <Table.Cell>{sensor.ag_type}</Table.Cell>
                <Table.Cell>
                  {' '}
                  <Button color={Mode? 'success' : 'failure'} onClick={()=>handleClick(sensor)} className=" w-[4rem] ml-[10px]">
                    { Mode ?  <IoMdAddCircleOutline className="h-5 w-[20px]" /> :  <IoIosRemoveCircleOutline  className="h-5 w-[20px]" />}
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
