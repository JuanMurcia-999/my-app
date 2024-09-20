import { toast} from 'sonner';

export async function Addagent(Body) {
  const apiURL = '/api/agents/create/'
  console.log('serv createagent')
  return fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => {
      if (!response.ok){
        toast.error('Error al agregar el agente')
        return false
      } else{
        toast.success('Agente agregado')
        return true
      }

    })
    .catch(error => {
      toast.error('No es posible agregar el usuario')
      return false

    })

     
}
