import { toast, Toaster} from 'sonner';

export default function DeleteSensor(Id,name) {
  const apiURL = `/api/features/delete/?id=${Id}&nametask=${name}`;
  
  fetch(apiURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Añade otros encabezados si es necesario, como autenticación
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la petición DELETE');
    }
    return response.json(); // O response.text() dependiendo de la respuesta
  })
  .then( toast.error('sensor eliminado'))
  .catch(error => {
    console.error('Hubo un error:', error);
  })
}
