import { DarkThemeToggle } from 'flowbite-react'
import { Navbar } from "flowbite-react";



export default function ComNavbar() {

  console.log('Cargando Navbar')

  return (
    <nav class="bg-white dark:bg-gray-800  dark:border-b-4-black border-b-4-white fixed w-full h-[70px]">
    <Navbar fluid rounded>
      <Navbar.Brand>
        <DarkThemeToggle />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Gestor SNMP
        </span>
      </Navbar.Brand>
  
    </Navbar>
  </nav>
  )
}
