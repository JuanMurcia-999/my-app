const fromApiResponsetoagent = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const agentes = apiresponse.map((agente) => {
      const { id_alarm, ip, date, time } = agente

      return { id_alarm, ip, date, time }
    })

    return agentes
  }
  return []
}

export default async function GetTraps() {
  const apiURL = '/api/traps/all/'
  console.log('serv Getagents')
  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetoagent(datos)
}
