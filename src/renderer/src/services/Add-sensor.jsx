import { toast} from 'sonner';

export function AddSesnor(Body) {

  
  const apiURL = '/api/agents/features/new/'
  console.log('serv addsensor')
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then(toast.success('Sensor agragado'))
    .catch(error => {
      toast.error('No es posible agregar el sensor')

    })

     
}
