const fromApiResponsetofeature = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const features = apiresponse.map((feature) => {
      const { id_agent, ip_agent, oid, description, timer, id_feature } = feature
      return { id_agent, ip_agent, oid, description, timer, id_feature }
    })

    return features
  }
  return []
}

export default async function Get_FeaturesAgent(IP) {
  console.log('serv featuresAgent')
  const apiURL = `/api/agents/features/agent/${IP}`

  const res = await fetch(apiURL)
  const datos = await res.json()
  return fromApiResponsetofeature(datos)
}
