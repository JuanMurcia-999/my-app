const fromApiResponsehistory = (apiresponse) => {
  const { value, created_at } = apiresponse
  return [ value, created_at ]
}

let Body = {
  oid: '1.3.6.1.2.1.2.2.1.10.12',
  ip_agent: '192.168.20.25'
}

export async function Get_history_sensor() {
  const apiURL = '/api/history/sensor/'

  console.log('serv AllFeatures')
  const res = await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const datos = await res.json()
  return fromApiResponsehistory(datos)
}
