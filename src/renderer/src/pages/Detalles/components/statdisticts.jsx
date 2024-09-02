import { Table } from 'flowbite-react'

import { useDetallesConext } from '../../../contexts/DetallesProvaider'

export default function Tablestadisticts() {
  const { datesGraf } = useDetallesConext()

  const datagrafics = datesGraf.data.datagrafic
  console.log(datagrafics)
  return (
    <div className="overflow-y-auto h-[30rem] mt-[30px] scrollbar-hide p-[20px]">
      {datagrafics.map((sensor) => (
        <>
          <span className=" text-xl font-semibold dark:text-white">{sensor.name}</span>
          <div className="h-[20rem] mt-[10px]">
            <Table hoverable className="mb-[10px]">
              <Table.Head className='flex-column '>
                <Table.HeadCell>MINIMO</Table.HeadCell>
                <Table.HeadCell>MAXIMO</Table.HeadCell>
                <Table.HeadCell>PROMEDIO</Table.HeadCell>
              </Table.Head>
              <Table.Body
                className="divide-y"
                class="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Row>
                  <Table.Cell>{sensor.stadistics.min}</Table.Cell>
                  <Table.Cell>{sensor.stadistics.max}</Table.Cell>
                  <Table.Cell>{sensor.stadistics.avg}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <div className="overflow-y-auto h-[10rem]  scrollbar-hide  w-[100%]">
              <Table hoverable className="mt-[20px]">
                <Table.Head>
                  <Table.HeadCell>Valor</Table.HeadCell>
                  <Table.HeadCell>FECHA</Table.HeadCell>
                  <Table.HeadCell>HORA</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y bg-white dark:border-gray-700 dark:bg-gray-800">
                  {sensor.values.map((value, index) => (
                    <Table.Row>
                      <Table.Cell>{value}</Table.Cell>
                      <Table.Cell>{sensor.date[index]}</Table.Cell>
                      <Table.Cell>{sensor.time[index]}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}
