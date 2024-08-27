import { Table } from "flowbite-react";
import { Link } from "react-router-dom";


export default function ComTable({agents}) {
  return (
    <>
    <div className="overflow-y-auto h-auto m-[20px] flex justify-center ">
      
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
              
                <Table.Row key={agent.id_agent} class="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {agent.ag_name}
                </Table.Cell>
                <Table.Cell>{agent.ip_address}</Table.Cell>
                <Table.Cell>{agent.id_agent}</Table.Cell>
                <Table.Cell>
                  <Link to={`/detalles/${agent.ip_address}/${agent.id_agent}/${agent.ag_name}/${agent.type.id_type}`} class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
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
