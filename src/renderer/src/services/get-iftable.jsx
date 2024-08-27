import { toast } from 'sonner'

const fromApiResponseToInterfaces = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    return apiresponse
  } else {
    toast.success('iftable no disponible')
  }
}

export default async function Get_iftable(Ip) {
  const apiURL = `/api/iftable/${Ip}`
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
