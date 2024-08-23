import { toast } from 'sonner'

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
    .then((response) => {
      if (response.ok) {
        toast.success('Sensor agregado')
        response.json()
      }else{
        toast.error('error al activar la tarea')
      }
    })
    .catch((error) => {
      toast.error('No es posible agregar el sensor')
    })
}
