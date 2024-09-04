import { Button, Card, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { GetObject } from '../../services/get-object'
import { SetObject } from '../../services/set-object'

export default function Operation() {
  const [valueget, setValueget] = useState()
  const [bodyope, setBodyop] = useState({
    oid: '',
    value: '',
    ip: ''
  })

  const handleOperation = (action) => {
    if (action == 'Get') {
      GetObject(bodyope).then((dato) => setValueget(dato))
    } else if (action == 'Set') {
      SetObject(bodyope)
    }
  }

  const handleChangeset = (e) => {
    const { name, value } = e.target
    setBodyop((prevBodyAgent) => ({
      ...prevBodyAgent,
      [name]: value
    }))
  }

  return (
    <>
      <div className="flex flex-col z-20 pt-2 mt-[2rem] ml-[50px]  bg-slate-100 dark:bg-gray-700  ">
        <span class="self-center whitespace-nowrap bg-slate-100w-[98%] mb-[40px] text-xl font-semibold dark:text-white">
          Operaciones
        </span>

        <Card className="max-w-md ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Consultar un objeto OID
          </h5>
          <span className="flex flex-col space-y-4">
            <TextInput
              name="ip"
              type="text"
              placeholder="Ingrese Ip"
              required
              onChange={handleChangeset}
            />
            <TextInput
              name="oid"
              type="text"
              placeholder="Ingrese OID 1.3.6..."
              required
              onChange={handleChangeset}
            />
            <Button className=" w-[100px]" onClick={() => handleOperation('Get')}>
              GET
            </Button>
          </span>
          <span class=" whitespace-nowrap bg-slate-100w-[98%] text-xl font-semibold dark:text-white">
            Valor : {valueget}
          </span>
        

        </Card>



        <Card className="max-w-md mt-[40px]">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Modificar un objeto OID
          </h5>
          <span className="flex flex-col space-y-4 ">
            <TextInput
              name="ip"
              type="text"
              placeholder="Ingrese Ip"
              required
              onChange={handleChangeset}
            />
            <TextInput
              name="oid"
              type="text"
              placeholder="Ingrese OID 1.3.6..."
              required
              onChange={handleChangeset}
            />
            <TextInput
              name="value"
              type="text"
              placeholder="Nuevo valor"
              required
              onChange={handleChangeset}
            />
          </span>
          <Button className="w-[100px]" onClick={() => handleOperation('Set')}>
            SET
          </Button>
        </Card>
      </div>
    </>
  )
}
