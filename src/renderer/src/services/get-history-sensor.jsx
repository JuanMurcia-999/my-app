const fromApiResponsehistory = (apiresponse) => {
  console.log(apiresponse)
  const { value, created_at } = apiresponse
  return { value, created_at }
}


export async function Get_history_sensor({id_agent,id_adminis,id_sensor}) {
  const apiURL = '/api/history/sensor/'

  let Body = {
    id_adminis:id_adminis,
    id_sensor :id_sensor,
    id_agent: id_agent
  } 
  
  console.log('serv AllFeatures')
  const res = await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(Body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const datos = await res.json()
  return datos
}
