import { serverIp, serverPort } from '../components/ConfAPI'

const server = process.env.NODE_ENV === 'production' ? `http://${serverIp}:${serverPort}` : '/api'


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

export async function GetTraps() {
  
  const apiURL = `${server}/traps/all/`
  console.log('serv Getagents')
  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetoagent(datos)
}

export default async function GetMessageTraps(ID) {
  
  const apiURL = `${server}/traps/message/${ID}`
  console.log('serv Getagents')
  const res = await fetch(apiURL)
  const datos = await res.json()
  return datos
}
