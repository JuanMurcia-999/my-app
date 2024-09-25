import { serverIp , serverPort} from "../components/ConfAPI"
import { toast} from 'sonner';

const server= process.env.NODE_ENV === 'production'? `http://${serverIp}:${serverPort}` :"/api" 

const fromApiResponsetoagent = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const agentes = apiresponse.map((agente) => {
      const { ag_name, id_agent, ip_address, type } = agente
      
      return {  ag_name, id_agent, ip_address, type }
    })
  
    return agentes
  }
  return []
}

export default async function Getagents() {
  const apiURL = `${server}/agents/all/`
  console.log('serv Getagents')
  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetoagent(datos)
}

export async function Addagent(Body) {
  const apiURL = `${server}/agents/create/`
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


export async function Deleteagent(field, value) {
  
  const apiURL = `${server}/agents/delete/${field}?value=${value}`;
  console.log('serv deleteAgent')
  return fetch(apiURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Añade otros encabezados si es necesario, como autenticación
    },
  })
  .then(response => {
    if (!response.ok) {
      toast.error('Error en la petición DELETE');
      return false
    }else{
      toast.success('agente eliminado')
      return true
    }

  })
  .catch(error => {
    toast.error('Hubo un error:', error);
    return false
  })
}




