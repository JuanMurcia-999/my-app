import { Card } from 'flowbite-react'
import { Button } from 'flowbite-react'

export default function CardAgent({ ag_name, ip, type }) {
  return (
    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {ag_name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400"> IP:  {ip} </p>
      <p className="flex font-normal text-gray-700 dark:text-gray-400"> Tipo:  {type}</p>
    </Card>
  )
}
