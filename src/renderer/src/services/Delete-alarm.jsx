import { toast } from 'sonner'

export function DeleteAlarm(id_alarm) {
  const apiURL = `/api/alarms/delete/?id=${id_alarm}`
  console.log('serv addsensor')
  fetch(apiURL, {
    method: 'DDELETE',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        toast.success('Alarma Eliminada')
      }
    })
    .catch((error) => {
      toast.error('Eliminada o no exixte')
    })
}
