import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { useHomeContext } from '../contexts/HomeProvaider'
import { Dropdown } from 'flowbite-react'
import { Addagent } from '../services/Create-agent'

let BodyAgent = {
  ag_name: '',
  ip_address: '',
  ag_type: ''
}

export default function ComFormCreateAgent() {
  const [openModalCreate, setOpenModalCreate] = useState(false)
  const [selectedtype, setSelectedType] = useState()
  const [defaultt, setDefault] = useState('Tipo')

  const [bodyAgent, setBodyAgent] = useState(BodyAgent)
  const { reloadAgents, setReloadAgents } = useHomeContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    setOpenModalCreate(false)
    Addagent(bodyAgent)
    setReloadAgents(!reloadAgents)
  }

  const handleSelect = (value, text) => {
    setSelectedType(value)
    setDefault(text)
  }

  const handleChangeDos = (e) => {
    const { name, value } = e.target

    setBodyAgent((prevBody) => ({
      ...prevBody,
      [name]: value,
      ag_type: selectedtype
    }))
  }

  return (
    <>
      <button class="flex-1 whitespace-nowrap px-3" onClick={() => setOpenModalCreate(true)}>
        Nuevo agente
      </button>
      <Modal
        show={openModalCreate}
        size="md"
        onClose={() => {
          setOpenModalCreate(false)
        }}
        popup
      >
        <Modal.Header />

        <Modal.Body>
          <div class="space-y-6">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Registrar un nuevo Agente
            </h3>
            <Dropdown label={defaultt} dismissOnClick={true}>
              <Dropdown.Item onClick={() => handleSelect('2', 'PC')}>PC</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect('3', 'Router')}>Router</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect('4', 'Mixto')}>Mixto</Dropdown.Item>
            </Dropdown>
            <div>
              <div class="mb-2 block">
                <Label htmlFor="Hostname" value="Hostname" />
              </div>
              <TextInput name="ag_name" type="text" required onChange={handleChangeDos} />
            </div>
            <div>
              <div class="mb-2 block">
                <Label htmlFor="password" value="IP Address" />
              </div>
              <TextInput name="ip_address" type="text" required onChange={handleChangeDos} />
            </div>

            <div class="w-full">
              <Button onClick={handleSubmit}>Registrar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
