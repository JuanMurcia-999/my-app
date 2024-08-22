import { Table, Button } from 'flowbite-react'
import { IoMdAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'
import { Enable_task, Disable_task } from '../../../services/Action-task'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'

let Body = {
  name: '',
  nametask: '',
  id_feature: 0,
  id_agent: 0,
  params: {}
}

export default function TabledefaultTasks({ Sensors, Mode, infoAgent }) {
  const { reloadActive, setReloadactive } = useDetallesConext()

  const handleClick = (sensor,id_feature) => {
    Body.name = infoAgent.Host
    Body.nametask = sensor.fe_name
    Body.id_feature = sensor.id_feature
    Body.id_agent = infoAgent.Id
    Body.params = {
      timer: 10,
      id_adminis: id_feature
    }

    if (Mode) {
      Enable_task(Body)
      setReloadactive(true)
    } else {
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

            <Table.HeadCell>{Mode ? 'Agregar' : 'Eliminar'}</Table.HeadCell>
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

                <Table.Cell>
                  {' '}
                  <Button
                    color={Mode ? 'success' : 'failure'}
                    onClick={() => handleClick(sensor,sensor.id_feature)}
                    className=" w-[4rem] ml-[10px]"
                  >
                    {Mode ? (
                      <IoMdAddCircleOutline className="h-5 w-[20px]" />
                    ) : (
                      <IoIosRemoveCircleOutline className="h-5 w-[20px]" />
                    )}
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
