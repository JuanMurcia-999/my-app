import { toast } from 'sonner'
import { serverIp,serverPort } from '../components/ConfAPI'

const server = process.env.NODE_ENV === 'production' ? `http://${serverIp}:${serverPort}` : '/api'


const fromApiResponsetoalarm = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const alarms = apiresponse.map((alarm) => {
      const { id_alarm, id_agent, id_adminis, id_sensor, operation, value, counter } = alarm
      return { id_alarm, id_agent, id_adminis, id_sensor, operation, value, counter }
    })

    return alarms
  }
  return []
}

export async function GetAlarm(id_agent) {
  const apiURL = `${server}/alarms/all/?id_agent=${id_agent}`
  console.log('serv AllFeatures')
  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetoalarm(datos)
}


export async function DeleteAlarm(id_alarm) {
  const apiURL = `${server}/alarms/delete/?id=${id_alarm}`
  console.log('serv addsensor')
  fetch(apiURL, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => {
      if (response.ok) {
        toast.success('Alarma Eliminada')
      }
    })
    .catch((error) => {
      toast.error('Eliminada o no exixte')
    })
}
