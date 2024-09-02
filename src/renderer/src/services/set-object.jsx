import { toast } from 'sonner'

export function SetObject(Body) {
  const apiURL = '/api/snmp/set/'
  console.log('serv SetObject')
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => {
      if (response.ok) {
        toast.success('Set Realizado')
      }else{
        toast.error('Fallo peticiion SET')
      }
    })
    .catch((error) => {
      toast.error('No es posible agregar la alarma')
    })
}
