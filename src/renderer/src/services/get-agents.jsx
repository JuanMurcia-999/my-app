const fromApiResponsetoagent = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const angentes = apiresponse.map((agente) => {
      const { Hostname, ID_agent, IP_address } = agente
      return { Hostname, ID_agent, IP_address }
    })
    return angentes
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
