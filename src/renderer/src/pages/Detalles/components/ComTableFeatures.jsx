import { Table, TableCell } from 'flowbite-react'
import { MdOutlineDelete } from 'react-icons/md'
import DeleteSensor from '../../../services/Delete-sensor'
import { ImStatsBars } from 'react-icons/im'
import { Get_history_sensor } from '../../../services/get-history-sensor'
import { useState } from 'react'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'
import { ModalAlarms } from './Modal-alarm'

export default function ComTableFeatures({ features, infoagent }) {
  const { setDatesgraf,reloadFeatures, setReloadFeatures } = useDetallesConext()
  const [datos, setDatos] = useState({ value: [], created_at: [] })

  const handleClick = (ID) => {
    DeleteSensor(ID, infoagent.Host)
    setReloadFeatures(!reloadFeatures)
    setDatesgraf([])
  }
  const handleClickDos = ({ id_adminis, id_agent, id_sensor }) => {
    Get_history_sensor({ id_adminis: id_adminis, id_agent: id_agent, id_sensor: id_sensor }).then(
      (datos) => setDatesgraf(datos)
    )
  }

  return (
    <>
      <div className="overflow-y-auto h-[20rem] m-12  flex justify-center">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>OID</Table.HeadCell>
            <Table.HeadCell>Nombre sensor</Table.HeadCell>
            <Table.HeadCell>Timer</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
            <Table.HeadCell>Ver</Table.HeadCell>
            <Table.HeadCell>Alrma</Table.HeadCell>
          </Table.Head>
          <Table.Body class="divide-y">
            {features.map((feature) => (
              <Table.Row
                key={feature.id_adminis}
                class="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  {feature.id_sensor ? feature.id_sensor : feature.id_adminis}
                </Table.Cell>
                <Table.Cell>{feature.oid}</Table.Cell>
                <Table.Cell>{feature.adminis_name} </Table.Cell>
                <Table.Cell>{feature.timer}</Table.Cell>
                {feature.oid ? (
                  <Table.Cell
                    onClick={() => {
                      handleClick(feature.id_adminis)
                    }}
                  >
                    <MdOutlineDelete />
                  </Table.Cell>
                ) : (
                  <Table.Cell></Table.Cell>
                )}
                <Table.Cell
                  onClick={() => {
                    handleClickDos({
                      id_adminis: feature.id_adminis,
                      id_sensor: feature.id_sensor,
                      id_agent: feature.agent.id_agent
                    })
                  }}
                >
                  <ImStatsBars />
                </Table.Cell>

                <TableCell>
                  <ModalAlarms infoagent={infoagent} infosensor={feature} />
                </TableCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
