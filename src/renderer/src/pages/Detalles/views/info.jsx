import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Get_iftable from '../../../services/get-iftable'
import TableIftable from '../components/TableifTable'

export function ViewInfo() {
  let { Ip, Id, Host } = useParams()
  const [iftable, setIftable] = useState([])

  useEffect(() => {
    console.log('efect todos los sensores')
    Get_iftable(Ip).then((datos) => setIftable(datos))
  }, [])

  return (
    <>
      <div className="flex flex-col z-20  m-[10px] h-[100vh] bg-pink-700  dark:bg-gray-700">
        <span> Interfaces</span>
        <TableIftable interfaces={iftable} />
      </div>
    </>
  )
}
