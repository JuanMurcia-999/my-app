const fromApiResponsetofeature = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    const features = apiresponse.map((feature) => {
      const {  id_agent, oid, adminis_name, timer, id_adminis ,agent} = feature
      return {  id_agent, oid, adminis_name, timer, id_adminis, agent }
    })
    console.log(features)
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
