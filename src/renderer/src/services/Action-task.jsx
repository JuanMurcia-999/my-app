import { serverIp, serverPort } from '../components/ConfAPI'
import { toast } from 'sonner'

const server = process.env.NODE_ENV === 'production' ? `http://${serverIp}:${serverPort}` : '/api'

export async function Enable_task(Body) {
  const apiURL = `${server}/exect-task/`
  console.log('serv EnableTask')
  return fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => {
      if (response.ok) {
        response.json()
        toast.success('Sensor agregado')
        return true
      } else {
        toast.error('No es posible agregar el sensor')
        return false
      }
    })
    .catch((error) => {
      toast.error('No es posible activar el sensor')
      return false
    })
}

export async function Disable_task(Body) {
  const apiURL = `${server}/task/stop/`
  console.log('serv DisableTask')
  return await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => {
      if (response.ok) {
        response.json()
        toast.success('Sensor desactivado')
        return true
      } else {
        toast.error('No es posible desactivar el sensor')
        return false
      }
    })

    .catch((error) => {
      toast.error('No es posible desactivar la tarea')
      return false
    })
}
