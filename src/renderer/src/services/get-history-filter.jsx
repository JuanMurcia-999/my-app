export async function Get_history_filter( Body ) {
  const apiURL = '/api/history/filter/'

  console.log('serv history filter')
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
