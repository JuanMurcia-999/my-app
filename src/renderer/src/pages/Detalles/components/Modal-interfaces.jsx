import { Button, Modal,Label,TextInput } from 'flowbite-react'
import { useState } from 'react'

export function ModalInterfaces() {
  const [openModal, setOpenModal] = useState(false)


  const handleChangeDos=()=>{


  }
  return (
    <>
      <Button className='  mt-[10px] ml-[10px]  w-[8rem]' onClick={() => setOpenModal(true)}>Agregar al sensor</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Agregar interfaz al sensor</Modal.Header>
        <Modal.Body className='flex'>
          <span className='mr-[10px]'>
            <div class="mb-1 block">
              <Label htmlFor="ifIndex" value="Indice" />
            </div>
            <TextInput name="ifIndex" type="text" required onChange={handleChangeDos} />
          </span>
          <span>
            <div class="mb-1 block">
              <Label htmlFor="Timer" value="Intervalo (min)" />
            </div>
            <TextInput name="Timer" type="text" required onChange={handleChangeDos} />
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Agregar</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
