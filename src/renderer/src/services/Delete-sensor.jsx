import { toast } from 'sonner'

export default function DeleteSensor(Id, name) {
  const apiURL = `/api/features/delete/?id=${Id}&nametask=${name}`

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
