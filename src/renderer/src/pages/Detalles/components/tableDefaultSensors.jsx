import { Table } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { IoMdAddCircleOutline } from 'react-icons/io'


export default function Tabledefaultsensors({ Sensors }) {
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
                  <Button className=" w-[4rem] ml-[10px]">
                    <IoMdAddCircleOutline className="h-5 w-[20px]" />
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
