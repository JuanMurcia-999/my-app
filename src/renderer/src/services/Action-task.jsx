import { toast } from 'sonner'

export function Enable_task(Body) {
  const apiURL = '/api/exect-task/'
  console.log('serv EnableTask')
  fetch(apiURL, {
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
      } else {
        toast.error('No es posible agregar el sensor')
      }
    })
    .catch((error) => {
      toast.error('No es posible activar el sensor')
    })
}

export async function Disable_task(Body) {
  const apiURL = '/api/task/stop/'
  console.log('serv DisableTask')
  await fetch(apiURL, {
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
      } else {
        toast.error('No es posible desactivar el sensor')
      }
    })

    .catch((error) => {
      toast.error('No es posible desactivar la tarea')
    })
}
