import { useState } from 'react'
import { CiViewTable } from 'react-icons/ci'
import { PiCards } from 'react-icons/pi'
import { Button } from 'flowbite-react'


export default function Buttonchange() {
  const [change, setChange] = useState(true)

  const handleChange = (event) => {
    setChange(!change)
  }
  

  return (
    <>
      <Button className='w-[40px] ml-[20px]' onClick={handleChange} color="dark">
      {change ? <CiViewTable /> : <PiCards />}
      </Button>
    </>
  )

}
