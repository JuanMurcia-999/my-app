
import { toast } from "sonner"



const fromApiResponseToInterfaces = (apiresponse) => {
  if (Array.isArray(apiresponse)) {
    return apiresponse
  } else {
    toast.success('Agente agregado')
  }
}

export default async function Get_iftable(Ip) {
  const apiURL = `/api/iftable/${Ip}`
  console.log('serv iftable')
  try {
    const res = await fetch(apiURL)
    const datos = await res.json()
    return fromApiResponseToInterfaces(datos)
  } catch (err) {
    toast.error('Agente desconectado')
  }
}