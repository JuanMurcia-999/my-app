import { serverIp, serverPort } from '../components/ConfAPI'
import { toast } from 'sonner'

const server = process.env.NODE_ENV === 'production' ? `http://${serverIp}:${serverPort}` : '/api'

const fromApiResponsetofeature = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const features = apiresponse.map((feature) => {
      const { id_agent, oid, adminis_name, timer, id_adminis, id_sensor, agent } = feature
      return { id_agent, oid, adminis_name, timer, id_adminis, id_sensor, agent }
    })

    return features
  }
  return []
}

export async function Get_FeaturesAgent(IP) {
  console.log('serv featuresAgent')

  const apiURL = `${server}/agents/features/agent/${IP}`

  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetofeature(datos)
}

export async function AddSesnor(Body) {
  const apiURL = `${server}/agents/features/new/`
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
      } else {
        toast.error('error al activar la tarea')
      }
    })
    .catch((error) => {
      toast.error('No es posible agregar el sensor')
    })
}

export async function Get_history_filter(Body) {
  const apiURL = `${server}/history/filter/`

  console.log('serv history filter')
  const res = await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const datos = await res.json()
  return datos
}

export async function DeleteSensor(Id, name) {
  const apiURL = `${server}/features/delete/?id=${Id}&nametask=${name}`

  return fetch(apiURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
      // Añade otros encabezados si es necesario, como autenticación
    }
  })
    .then((response) => {
      if (!response.ok) {
        toast.error('No es posible eliminar sensor')
        return false
      } else {
        toast.success('Sensor eliminado')
        return true
      }
    })
    .catch((error) => {
      toast.error('Fallo en la peticion')
    })
}

export async function AddAlarm(Body) {
 
  const apiURL = `${server}/alarms/new/`
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
        toast.success('Alarma agragada')
      }
    })
    .catch((error) => {
      toast.error('No es posible agregar la alarma')
    })
}
