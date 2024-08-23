import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import { Dropdown } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import Deleteagent from '../services/Delete-agent'
import { useHomeContext } from '../contexts/HomeProvaider'
import ComAviso from './Aviso'

const Columns = {
  id_agent: 'ID agente',
  ag_name: 'nombre',
  ip_address: 'IP'
}


export default function ComModalDeleteAgent() {
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [selectedValue, setSelectedValue] = useState('Buscar por')
  const [valudelete, setValuedelet] = useState('')
  const { reloadAgents, setReloadAgents, confirmDelete, setConfirmDelete } = useHomeContext()

  const handleSelect = (value) => {
    setSelectedValue(value)
  }

  const GetText = (e) => {
    e.preventDefault()
    setValuedelet(e.target.value)
  }

  const handleDelete = () => {
    Deleteagent(selectedValue, valudelete)
    setOpenModalDelete(false)
    setReloadAgents(!reloadAgents)
    setConfirmDelete(false)
  }

  return (
    <>
      <button onClick={() => setOpenModalDelete(true)}>Eliminar agente </button>
      <Modal dismissible show={openModalDelete} onClose={() => setOpenModalDelete(false)}>
        <Modal.Header>Eliminar Agente</Modal.Header>
        <Modal.Body>
          <div class="space-y-6">
            <Dropdown label={selectedValue} dismissOnClick={true}>
              <Dropdown.Item onClick={() => handleSelect('ID')}>ID agente</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect('name')}>Nombre</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect('IP')}>IP</Dropdown.Item>
            </Dropdown>

            <TextInput
              onChange={GetText}
              id="email3"
              type="email"
              placeholder="Valor del campo"
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ComAviso action={handleDelete} />
        </Modal.Footer>
      </Modal>
    </>
  )
}
