import CardAgent from './cardagent'
import { Link } from 'react-router-dom'

export default function ListOfAgents({ agents }) {
  return (
    <>
 <div class="overflow-y-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {agents.map((agent) => (
      <Link key={agent.ID_agent} to={`/detalles/${agent.IP_address}/${agent.ID_agent}/${agent.Hostname}`}>
        <CardAgent hostname={agent.Hostname} ip={agent.IP_address} />
      </Link>
    ))}
  </div>
    </>
  )
}
