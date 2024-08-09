import { Table } from 'flowbite-react'
import { MdOutlineDelete } from 'react-icons/md'
import DeleteSensor from '../../../services/Delete-sensor'
import { ImStatsBars } from 'react-icons/im'
import { Get_history_sensor } from '../../../services/get-history-sensor'
import { useState } from 'react'

export default function ComTableFeatures({ features, reload }) {
  const [cosas, setCosas] = useState()

  const handleClick = (ID) => {
    DeleteSensor(ID)
    reload(true)
  }
  const handleClickDos = () => {
    Get_history_sensor().then((datos) => setCosas(datos))
  }

  return (
    <>
      <div className="overflow-y-auto h-[20rem] m-12">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>agente</Table.HeadCell>
            <Table.HeadCell>OID</Table.HeadCell>
            <Table.HeadCell>Nombre sensor</Table.HeadCell>
            <Table.HeadCell>Timer</Table.HeadCell>
            <Table.HeadCell>ID sensor</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body class="divide-y">
            {features.map((feature) => (
              <Table.Row
                key={feature.id_adminis}
                class="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                  {feature.agent.ag_name}
                </Table.Cell>
                <Table.Cell>{feature.oid}</Table.Cell>
                <Table.Cell>{feature.adminis_name} </Table.Cell>
                <Table.Cell>{feature.timer}</Table.Cell>
                <Table.Cell>{feature.agent.ip_address} </Table.Cell>
                <Table.Cell
                  onClick={() => {
                    handleClick(feature.id_feature)
                  }}
                >
                  {' '}
                  <MdOutlineDelete />{' '}
                </Table.Cell>
                <Table.Cell
                  onClick={() => {
                    handleClickDos()
                  }}
                >
                  <ImStatsBars />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
