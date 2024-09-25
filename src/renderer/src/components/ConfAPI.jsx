import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useState, useEffect } from 'react'
import { FaServer } from "react-icons/fa";

// Lee la IP almacenada en localStorage o usa una IP predeterminada si no existe
export const serverIp = localStorage.getItem('serverIp') || 'localhost'
export const serverPort = localStorage.getItem('Port') || '8000'


export default function ApiConfig() {
  const [openModalCreate, setOpenModalCreate] = useState(false)
  const [apiUrl, setApiUrl] = useState('localhost')
  const [port, setPort] = useState('8000')

  useEffect(() => {
    setApiUrl(localStorage.getItem('serverIp') || 'localhost')
    setPort(localStorage.getItem('Port') || port)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('serverIp', apiUrl)
    localStorage.setItem('Port', port)
    setApiUrl(apiUrl)
    setPort(port)
    alert('IP guardada correctamente')
  }

  return (
    <>
      <button  className="flex whitespace-nowrap px-3" onClick={() => setOpenModalCreate(true)}>
         Conf Recolector
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
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="IP Address" />
              </div>
              <TextInput
                name="IP del recolector"
                type="text"
                required
                placeholder={apiUrl}
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
              />
                <div className="mb-2 block">
                <Label htmlFor="password" value="Puerto del recolector" />
              </div>
              <TextInput
                name="Port"
                type="text"
                required
                placeholder={port}
                value={port}
                onChange={(e) => setPort(e.target.value)}
              />
            </div>

            <div className="w-full">
              <Button onClick={handleSubmit}>Registrar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
