import { Button, Modal } from 'flowbite-react'
import { useState} from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'


export default function ComAviso({action}) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Eliminar</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div class="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Al eliminar el agente se eliminaran los sensores establecidos, sus alarmas y su historial.
              <br />
              <br />
              ¿Desea continuar?
            </h3>
            <div class="flex justify-center gap-4">
              <Button color="failure" onClick={action}>
                Aceptar
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar  
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


