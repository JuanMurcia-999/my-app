import { toast, Toaster} from 'sonner';

export function Createagent(Body) {
  const apiURL = '/api/agents/create/'
  console.log('serv createagent')
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then( toast.success('Agente agregado'))
    .catch(error => {
      toast.error('No es posible agregar el usuario')

    })

     
}
