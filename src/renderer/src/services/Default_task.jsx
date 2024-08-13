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

export async function Availabletaskdefault(type,Id) {
  const apiURL = `/api/features/default/agent/?id=${Id}&type=${type}`
  console.log(type)
  console.log('serv AvailableTasks')
  const res = await fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const datos = await res.json()
  return fromApiResponsedefault(datos)
}


export async function Activetaskdefault(type,Id) {
  const apiURL = `/api/feature/default/active/?id=${Id}&type=${type}`
  console.log(type)
  console.log('serv ActiveTasks')
  const res = await fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const datos = await res.json()
  return fromApiResponsedefault(datos)
}
