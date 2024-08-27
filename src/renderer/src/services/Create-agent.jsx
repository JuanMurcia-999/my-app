import { toast} from 'sonner';

export function Addagent(Body) {
  const apiURL = '/api/agents/create/'
  console.log('serv createagent')
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => {
      if (!response.ok){
        toast.error('Error al agregar el agente')
      } else{
        toast.success('Agente agregado')
      }

    })
    .catch(error => {
      toast.error('No es posible agregar el usuario')

    })

     
}
