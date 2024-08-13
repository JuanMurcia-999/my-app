import { Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { IoMdAddCircleOutline } from 'react-icons/io'

export default function TableIftable({ interfaces }) {
  let agent = useParams()
  
  return (
    <>
      <div className="overflow-y-auto h-[20rem] m-12">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>ifIndex</Table.HeadCell>
            <Table.HeadCell>ifDescr</Table.HeadCell>
            <Table.HeadCell>ifPhysAddress</Table.HeadCell>
            <Table.HeadCell>ifOutOctets</Table.HeadCell>
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
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
