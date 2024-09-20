import { toast, Toaster} from 'sonner';

export default function DeleteAgent(field, value) {
  const apiURL = `/api/agents/delete/${field}?value=${value}`;
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
