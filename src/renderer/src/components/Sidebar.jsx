import { Sidebar } from 'flowbite-react'
import { HiChartPie } from 'react-icons/hi'
import { MdMonitorHeart } from 'react-icons/md'
import { BsFillFileTextFill } from 'react-icons/bs'
import ComFormCreateAgent from './FormCreateAgent'
import { Link } from 'react-router-dom'
import ComModalDeleteAgent from './DeleteAgent'
import { GrActions } from 'react-icons/gr'
import { GiBoxTrap } from "react-icons/gi";
import ApiConfig from './ConfAPI'

export default function ComSidebar() {
  console.log('cargando Sidebar')

  return (
    <>
      <Sidebar
        class="hidden  lg:block fixed z-20 inset-0 top-[4.7rem] right-auto w-[17rem] h-100vh "
        aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/">
              <Sidebar.Item icon={HiChartPie}>Home</Sidebar.Item>
            </Link>

            <Sidebar.Collapse icon={MdMonitorHeart} label="Agentes ">
              <Sidebar.Item>
                <ComFormCreateAgent />
              </Sidebar.Item>

              <Sidebar.Item>
                <ComModalDeleteAgent />
              </Sidebar.Item>
            </Sidebar.Collapse>

     
            <Link to="/Operations">
              <Sidebar.Item icon={GrActions }>Operaciones</Sidebar.Item>
            </Link>
            <Link to="/Traps">
              <Sidebar.Item icon={GiBoxTrap }>Traps</Sidebar.Item>
            </Link>

            <Sidebar.Item>
                <ApiConfig />
              </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  )
}
