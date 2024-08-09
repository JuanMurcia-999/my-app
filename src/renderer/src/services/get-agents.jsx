const fromApiResponsetoagent = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const agentes = apiresponse.map((agente) => {
      const { ag_name, id_agent, ip_address, type } = agente
      
      return {  ag_name, id_agent, ip_address, type }
    })
    console.log(agentes)
    return agentes
  }
  return []
}



export default async function Getagents() {
  const apiURL = '/api/agents/all/'
  console.log('serv Getagents')
  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetoagent(datos)
}
