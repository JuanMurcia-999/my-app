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
    .then((response) => response.json())
    .then(toast.success('sensor activado'))
    .catch((error) => {
      toast.error('No es posible activar el sensor')
    })
}

export function Disable_task(Body) {
  console.log(Body)
    const apiURL = '/api/task/stop/'
    console.log('serv DisableTask')
    fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify(Body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then(toast.success('Tarea desactivada'))
      .catch((error) => {
        toast.error('No es posible desactivar la tarea')
      })
  }
  