import { Button, Modal, Label, TextInput, Dropdown } from 'flowbite-react'
import { useState } from 'react'
import { RiAlarmWarningLine } from 'react-icons/ri'
import { AddAlarm } from '../../../services/Services-view-sensors'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'

let Body = {
  id_agent: 0,
  id_adminis: 0,
  id_sensor: 0,
  operation: '',
  value: 0.0,
  counter: 0
}

export function ModalAlarms({ infoagent, infosensor }) {
  const [openModal, setOpenModal] = useState(false)
  const [bodyalarms, setBodyalarms] = useState(Body)
  const [operation, setOperation] = useState()
  const [deftext, setDeftext] = useState('Comparacion')
  const {reloadalarms, setReloadalarms}= useDetallesConext()

  const handleSelect = (ope, text) => {
    setOperation(ope)
    setDeftext(text)
  }
  const handleClick = (state) => {
    setOpenModal(false)
    setReloadalarms(!reloadalarms)
    if (state) {
      AddAlarm(Body)

    } else {
      console.log(state)
    }
  }

  const handleChangeDos = (e) => {
    const { name, value } = e.target
    Body.id_agent = infoagent.Id
    Body.id_adminis = infosensor.id_adminis
    Body.id_sensor = infosensor.id_sensor
    Body.operation = operation
    Body[name] = value
    setBodyalarms(Body)
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        <RiAlarmWarningLine />
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Agregar alarma</Modal.Header>
        <Modal.Body className="flex">
          <span className="mr-[10px]">
            <div class="mb-1 block">
              <Label htmlFor="num_interface" value="Evaluar" />
            </div>
            <Dropdown label={deftext} dismissOnClick={true}>
              <Dropdown.Item onClick={() => handleSelect('=', 'Igual')}>Igual</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect('<', 'Menor')}>Menor</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect('>', 'Mayor')}>Mayor</Dropdown.Item>
            </Dropdown>
          </span>
          <span>
            <div class="mb-1 block">
              <Label htmlFor="timer" value="Valor de referencia" />
            </div>
            <TextInput name="value" type="text" required onChange={handleChangeDos} />
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button color="green" onClick={() => handleClick(true)}>
            Agregar
          </Button>

          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
