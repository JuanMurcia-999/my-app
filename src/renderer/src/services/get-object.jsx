import { toast } from 'sonner'

export async function GetObject(Body) {
  const apiURL = '/api/snmp/get/';
  console.log('serv GetObject');
  
  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify(Body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const value = data._value; // Accede al valor _value
      return value
    } else {
      throw new Error('Error en la respuesta del servidor');
    }
  } catch (error) {
    toast.error('Fallo petición GET');
    console.error('Error:', error);
  }
}

