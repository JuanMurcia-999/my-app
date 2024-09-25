import { toast } from 'sonner'
import { serverIp, serverPort } from '../components/ConfAPI'

const server = process.env.NODE_ENV === 'production' ? `http://${serverIp}:${serverPort}` : '/api'

export async function GetObject(Body) {
  const apiURL = `${server}/snmp/get/`
  console.log('serv GetObject')

  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify(Body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    if (response.ok) {
      const data = await response.json()
      const value = data._value // Accede al valor _value
      return value
    } else {
      throw new Error('Error en la respuesta del servidor')
    }
  } catch (error) {
    toast.error('Fallo petición GET')
    console.error('Error:', error)
  }
}

export async function SetObject(Body) {
  const apiURL = `${server}/snmp/set/`
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
      } else {
        toast.error('Fallo peticiion SET')
      }
    })
    .catch((error) => {
      toast.error('No es posible agregar la alarma')
    })
}
