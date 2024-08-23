import { toast } from 'sonner'

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
  const apiURL = `/api/alarms/all/?id_agent=${id_agent}`
  console.log('serv AllFeatures')
  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetoalarm(datos)
}


export function DeleteAlarm(id_alarm) {
  const apiURL = `/api/alarms/delete/?id=${id_alarm}`
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
