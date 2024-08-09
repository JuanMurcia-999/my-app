const fromApiResponsedefault = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const sensors = apiresponse.map((sensor) => {
      const { id_feature, fe_name, ag_type } = sensor
      return { id_feature, fe_name, ag_type }
    })

    return sensors
  }
  return []
}

export async function Alldefaultsensor(type) {
  const apiURL = `/api/features/default/agent/?value=${type}`
  console.log(type)
  console.log('serv AlldefaultFeatures')
  const res = await fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const datos = await res.json()
  return fromApiResponsedefault(datos)
}
