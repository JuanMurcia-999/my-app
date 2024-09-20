import { Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { IoMdAddCircleOutline } from 'react-icons/io'


const mapifOperStatus={
  1:"up", 
  2:"down",
  3:"testing", 
  4:"unknown", 
  5:"dormant",
  6:"notPresent", 
  7:"lowerLayerDown" 
}


export default function TableIftable({ interfaces =[] }) {
  let agent = useParams()
  
  return (
    <>
      <div className="overflow-y-auto h-[20rem] m-12 flex justify-center bg-red scrollbar-hide w-[70%] ">
        <Table hoverable className=''>
          <Table.Head >
            <Table.HeadCell >ifIndex</Table.HeadCell>
            <Table.HeadCell >ifDescr</Table.HeadCell>
            <Table.HeadCell >ifPhysAddress</Table.HeadCell>
            <Table.HeadCell >ifOutOctets</Table.HeadCell>
            <Table.HeadCell >ifOperStatus</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {interfaces.map((inter) => (
              <Table.Row
                key={inter.ifIndex}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                 <Table.Cell>{inter.ifIndex}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {inter.ifDescr}
                </Table.Cell>
                <Table.Cell>{inter.ifPhysAddress}</Table.Cell>
                <Table.Cell>{inter.ifOutOctets}</Table.Cell>
                <Table.Cell>{  mapifOperStatus[inter.ifOperStatus] || 'Desconocido'}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
