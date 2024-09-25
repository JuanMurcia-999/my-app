import { toast } from 'sonner'
import { serverIp, serverPort } from '../components/ConfAPI'

const server = process.env.NODE_ENV === 'production' ? `http://${serverIp}:${serverPort}` : '/api'

const fromApiResponseToInterfaces = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    return apiresponse
  } else {
    toast.success('iftable no disponible')
  }
}

const fromApiResponsedefault = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const sensors = apiresponse.map((sensor) => {
      const { id_feature, fe_name, ag_type } = sensor
      return { id_feature, fe_name, ag_type }
    })

    return sensors
  }
  return []
}

export async function Get_iftable(Ip) {
  const apiURL = `${server}/iftable/${Ip}`
  console.log('serv iftable')

  try {
    const res = await fetch(apiURL)

    // Verificar si la respuesta es exitosa (status en el rango 200-299)
    if (!res.ok) {
      // Lanza un error personalizado según el código de estado
      throw new Error(`Error ${res.status}: ${res.statusText}`)
    }

    const datos = await res.json()
    return fromApiResponseToInterfaces(datos)
  } catch (err) {
    // Manejo de errores según el tipo
    if (err.message.includes('Failed to fetch')) {
      toast.error('No se pudo conectar con el servidor')
    } else if (err.message.includes('404')) {
      toast.error('if table no encontrada')
    } else {
      toast.error('Error al obtener datosw: ' + err.message)
    }
  }
}

export async function Availabletaskdefault(type, Id) {
  const apiURL = `${server}/features/default/agent/?id=${Id}&type=${type}`
  console.log('serv AvailableTasks')
  const res = await fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const datos = await res.json()
  return fromApiResponsedefault(datos)
}

export async function Activetaskdefault(type, Id) {
  const apiURL = `${server}/feature/default/active/?id=${Id}&type=${type}`
  console.log('serv ActiveTasks')
  const res = await fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const datos = await res.json()
  return fromApiResponsedefault(datos)
}
