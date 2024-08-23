import { info } from 'autoprefixer'
import { Button, Modal, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { Enable_task, Disable_task } from '../../../services/Action-task'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'
let Body = {
  name: '',
  nametask: 'Networktraffic',
  id_feature: 100,
  id_agent: 0,
  params: {
    num_interface: '',
    timer: '',
    id_adminis: 100
  }
}

export function ModalInterfaces({ infoagent }) {
  const [openModal, setOpenModal] = useState(false)
  const [bodyinterface, setBodyinterface] = useState(Body)
  const { reloadFeatures, setReloadFeatures } = useDetallesConext()

  const handleClick = (state) => {
    setOpenModal(false)

    if (state) {
      Enable_task(bodyinterface)
      setReloadFeatures(!reloadFeatures)
    } else {
      Disable_task(bodyinterface)
      setReloadFeatures(!reloadFeatures)
    }
  }

  const handleChangeDos = (e) => {
    const { name, value } = e.target

    Body.name = infoagent.Host
    Body.id_agent = infoagent.Id
    Body.params[name] = value
    setBodyinterface(Body)
  }

  return (
    <>
      <Button className="  mt-[10px] ml-[10px] w-[8rem]" onClick={() => setOpenModal(true)}>
        Agregar al sensor
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Agregar interfaz al sensor</Modal.Header>
        <Modal.Body className="flex">
          <span className="mr-[10px]">
            <div class="mb-1 block">
              <Label htmlFor="num_interface" value="Indice" />
            </div>
            <TextInput name="num_interface" type="text" required onChange={handleChangeDos} />
          </span>
          <span>
            <div class="mb-1 block">
              <Label htmlFor="timer" value="Intervalo (min)" />
            </div>
            <TextInput name="timer" type="text" required onChange={handleChangeDos} />
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button color="green" onClick={() => handleClick(true)}>
            Agregar
          </Button>
          <Button color="red" onClick={() => handleClick(false)}>
            Eliminar
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
