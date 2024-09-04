const fromApiResponsetoagent = (apiresponse) => {

    // if (Array.isArray(apiresponse)) {
    //   const agentes = apiresponse.map((agente) => {
    //     const { message } = agente
  
    //     return { message }
    //   })
  
    //   return agentes
    // }
    return apiresponse
  }
  
  export default async function GetMessageTraps(ID) {
    const apiURL = `/api/traps/message/${ID}`
    console.log('serv Getagents')
    const res = await fetch(apiURL)
    const datos = await res.json()
    return fromApiResponsetoagent(datos)
  }
  