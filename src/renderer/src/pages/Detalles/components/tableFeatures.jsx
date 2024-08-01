import { Table } from 'flowbite-react'

export default function TableFeatures({ features }) {
  return (
    <>
      <div className="overflow-y-auto h-[20rem] m-12">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>id agente</Table.HeadCell>
            <Table.HeadCell>ip agente</Table.HeadCell>
            <Table.HeadCell>oid</Table.HeadCell>
            <Table.HeadCell>description</Table.HeadCell>
            <Table.HeadCell>timer</Table.HeadCell>
            <Table.HeadCell>id sensor</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body class="divide-y">
            {features.map((feature) => (
              <Table.Row
                key={feature.id_feature}
                class="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="font-medium text-gray-900 dark:text-white">
                  {feature.id_agent}
                </Table.Cell>
                <Table.Cell>{feature.ip_agent}</Table.Cell>
                <Table.Cell>{feature.oid}</Table.Cell>
                <Table.Cell>{feature.description} </Table.Cell>
                <Table.Cell>{feature.timer}</Table.Cell>
                <Table.Cell>{feature.id_feature} </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
