import CardAgent from './cardagent'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

export default function ListOfAgents({ agents }) {
  return (
    <>
 <div class="overflow-y-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {agents.map((agent) => (
      <Link key={agent.id_agent} to={`/detalles/${agent.ip_address}/${agent.id_agent}/${agent.ag_name}/${agent.ag_type}` }>
        <CardAgent ag_name={agent.ag_name} ip={agent.ip_address} type={agent.type} />
      </Link>
    ))}
  </div>
    </>
  )
}
