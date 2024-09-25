import { Table, Button } from 'flowbite-react'

import { useTrapsContext } from '../../../contexts/TrapsContext'
import GetMessageTraps from '../../../services/Services-view-traps'

import { IoIosRemoveCircleOutline } from 'react-icons/io'
export default function TableTraps({Traps}) {
  const {message, setMessage} = useTrapsContext()

 

  const handlemessage=(ID)=>{
    GetMessageTraps(ID).then((message)=> setMessage(message))
  }


  return (
    <>
      <div className="overflow-y-auto h-[30rem] m-12 flex justify-center scrollbar-hide">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>ID TRAP</Table.HeadCell>
            <Table.HeadCell>IP</Table.HeadCell>
            <Table.HeadCell>DATE</Table.HeadCell>
            <Table.HeadCell>TIME</Table.HeadCell>
            <Table.HeadCell>View</Table.HeadCell>
       
          </Table.Head>
          <Table.Body className="divide-y">
          {Traps.map((trap) => (
              <Table.Row
                key={trap.id_alarm}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{trap.id_alarm} </Table.Cell>
                <Table.Cell>{trap.ip} </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{trap.date}</Table.Cell>
                <Table.Cell>{trap.time}</Table.Cell>
                <Table.Cell>
                  <Button  color="failure" onClick={()=> handlemessage(trap.id_alarm)}>
                    <IoIosRemoveCircleOutline/>
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}



          </Table.Body>
        </Table>
      </div>



      
    </>
  )
}
