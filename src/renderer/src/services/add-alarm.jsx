import { toast} from 'sonner';

export function AddAlarm(Body) {

  
  const apiURL = '/api/alarms/new/'
  console.log('serv addsensor')
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then(toast.success('Alarma agragada'))
    .catch(error => {
      toast.error('No es posible agregar la alarma')

    })

     
}
