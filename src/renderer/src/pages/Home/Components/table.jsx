import { Table } from "flowbite-react";
import { Link } from "react-router-dom";


export default function ComTable({agents}) {
  return (
    <>
    <div className="overflow-y-auto h-auto m-[20px]">
      
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Hostname</Table.HeadCell>
          <Table.HeadCell>Ip address</Table.HeadCell>
          <Table.HeadCell>ID agent</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          
        </Table.Head>
        <Table.Body class="divide-y">


        {
            agents.map(agent => 
              
                <Table.Row key={agent.ID_agent} class="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {agent.Hostname}
                </Table.Cell>
                <Table.Cell>{agent.IP_address}</Table.Cell>
                <Table.Cell>{agent.ID_agent}</Table.Cell>
                <Table.Cell>
                  <Link to={`/detalles/${agent.IP_address}/${agent.ID_agent}/${agent.Hostname}`} class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    View
                  </Link>
                </Table.Cell>
               
              </Table.Row>
            )

        }
        </Table.Body>
      </Table>
    </div>
    </>
  );
}
