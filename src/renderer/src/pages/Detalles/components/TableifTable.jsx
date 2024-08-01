import { Table } from 'flowbite-react'
import { Link } from 'react-router-dom'

const columns = [
  'ifAdminStatus',
  'ifDescr',
  'ifInDiscards',
  'ifInErrors',
  'ifInOctets',
  'ifInUnknownProtos',
  'ifLastChange',
  'ifMtu',
  'ifOperStatus',
  'ifOutDiscards',
  'ifOutErrors',
  'ifOutNUcastPkts',
  'ifOutOctets',
  'ifOutQLen',
  'ifOutUcastPkts',
  'ifPhysAddress',
  'ifSpecific',
  'ifSpeed',
  'ifType'
]

export default function TableIftable({ interfaces }) {
  return (
    <>
      <div className="overflow-y-auto h-[20rem] m-12">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>ifDescr</Table.HeadCell>
            <Table.HeadCell>ifInOctets</Table.HeadCell>
            <Table.HeadCell>ifAdminStatus</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {interfaces.map((inter) => (
              <Table.Row
                key={inter.ifDescr}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {inter.ifDescr}
                </Table.Cell>
                <Table.Cell>{inter.ifInOctets}</Table.Cell>
                <Table.Cell>{inter.ifAdminStatus}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
