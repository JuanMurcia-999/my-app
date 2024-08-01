const fromApiResponsetoagent = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const features = apiresponse.map((feature) => {
      const { id_agent, ip_agent, oid, description, timer, id_feature } = feature
      return { id_agent, ip_agent, oid, description, timer, id_feature }
    })
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
