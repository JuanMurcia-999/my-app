import { toast, Toaster} from 'sonner';

export default function DeleteAgent(field, value) {
  const apiURL = `/api/agents/delete/${field}?value=${value}`;
  console.log('serv deleteAgent')
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
  .then( toast.error('agente eliminado'))
  .catch(error => {
    console.error('Hubo un error:', error);
  })
}
