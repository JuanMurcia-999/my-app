import { Table, Button } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { DeleteAlarm } from '../../../services/get-alarms'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'

export default function TableAlarms({ Alarms }) {
const {reloadalarms, setReloadalarms}= useDetallesConext()

  const handledelete = (id_alarm) => {
    DeleteAlarm(id_alarm)
    setReloadalarms(!reloadalarms)
  }

  return (
    <>
      <div className="overflow-y-auto h-[40rem] m-12 flex justify-center scrollbar-hide">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>ID SENSOR</Table.HeadCell>
            <Table.HeadCell>COMPARACION</Table.HeadCell>
            <Table.HeadCell>REFERENCIA</Table.HeadCell>
            <Table.HeadCell>Eliminar</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Alarms.map((alarm) => (
              <Table.Row
                key={alarm.id_alarm}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{alarm.id_sensor ?  alarm.id_sensor : alarm.id_adminis} </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {alarm.operation}
                </Table.Cell>
                <Table.Cell>{alarm.value}</Table.Cell>
                <Table.Cell>
                  <Button color="failure" onClick={() => handledelete(alarm.id_alarm)}>
                    <IoIosRemoveCircleOutline className="h-5 w-[20px]" />
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
