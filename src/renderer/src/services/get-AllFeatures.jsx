const fromApiResponsetoagent = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const features = apiresponse.map((feature) => {
      const { agent,  oid, adminis_name, timer, id_adminis } = feature
      return { agent, oid, adminis_name, timer, id_adminis }
    })
    console.log(features)
    return features
  }
  return []
}

export default async function Get_AllFeatures() {
  const apiURL = '/api/agents/features/all/'
  console.log('serv AllFeatures')
  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetoagent(datos)
}
