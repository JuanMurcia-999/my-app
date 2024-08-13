'use client'
import { Button, Modal, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { AddSesnor } from '../../../services/Add-sensor'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'

let BodySensor = {
  ID: '',
  Ip: '',
  oid: '',
  description: '',
  interval: ''
}

export default function ComAddSesnor({ infoagent }) {
  const [openAddSesnor, setAddSesnor] = useState(false)
  const [bodySensor, setBodySensor] = useState()
  const {reloadFeatures, setReloadFeatures} = useDetallesConext()

  console.log()
  const handleSubmit = (event) => {
    event.preventDefault()
    setAddSesnor(false)
    AddSesnor(bodySensor)
    setReloadFeatures(true)
  }

  const handleChangeDos = (e) => {
    const { name, value } = e.target
    setBodySensor((prevBodyAgent) => ({
      ...prevBodyAgent,
      ['id_agent']:  infoagent.Id,
      ['ip_agent']:  infoagent.Ip,
      [name]: value
     
    }))
  }

  return (
    <>
      <Button className=" w-[4rem] ml-[10px]" onClick={() => setAddSesnor(true)}>
        <IoMdAddCircleOutline className="h-5 w-5" />
      </Button>

      <Modal dismissible show={openAddSesnor} onClose={() => setAddSesnor(false)}>
        <Modal.Header>Agregar nuevo sensor</Modal.Header>
        <Modal.Body>
          <div class="space-y-6">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Agregar sensor a ' {infoagent.Host} '
            </h3>
            <div>
              <div class="mb-2 block">
                <Label htmlFor="oid" value="oid" />
              </div>
              <TextInput
                name="oid"
                type="text"
                placeholder="1.3.6.1.2.1....."
                required
                onChange={handleChangeDos}
              />
            </div>
            <div>
              <div class="mb-2 block">
                <Label htmlFor="adminis_name" value="Nombre de la caracteristica" />
              </div>
              <TextInput name="adminis_name" type="text" required onChange={handleChangeDos} />
            </div>
            <div>
              <div class="mb-2 block">
                <Label htmlFor="timer" value="timer" />
              </div>
              <TextInput
                name="timer"
                type="number"
                placeholder="intervalo en minutos"
                required
                onChange={handleChangeDos}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Agregar </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
