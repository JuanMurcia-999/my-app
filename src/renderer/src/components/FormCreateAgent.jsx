import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { Createagent } from '../services/create-agents'
import { useHomeContext } from '../contexts/HomeProvaider'

let BodyAgent = {
  Hostname: '',
  IP_address: ''
}

export default function ComFormCreateAgent() {
  const [openModalCreate, setOpenModalCreate] = useState(false)

  const [Hostname, setHostname] = useState()
  const [IP, setIp] = useState()

  const [bodyAgent, setBodyAgent] = useState(BodyAgent)
  const { reloadAgents, setReloadAgents } = useHomeContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    setOpenModalCreate(false)
    Createagent(bodyAgent)
    setReloadAgents(true)
  }

  const handleChangeDos = (e) => {
    const { name, value } = e.target

    setBodyAgent((prevBody) => ({
      ...prevBody,
      [name]: value
    }))
  }

  return (
    <>
      <button class="flex-1 whitespace-nowrap px-3" onClick={() => setOpenModalCreate(true)}>
        Nuevo agente{' '}
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
            <div>
              <div class="mb-2 block">
                <Label htmlFor="Hostname" value="Hostname" />
              </div>
              <TextInput name="Hostname" type="text" required onChange={handleChangeDos} />
            </div>
            <div>
              <div class="mb-2 block">
                <Label htmlFor="password" value="IP Address" />
              </div>
              <TextInput name="IP_address" type="text" required onChange={handleChangeDos} />
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
