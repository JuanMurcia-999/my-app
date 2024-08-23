import { Sidebar } from 'flowbite-react'
import { HiChartPie } from 'react-icons/hi'
import { MdMonitorHeart } from 'react-icons/md'
import { BsFillFileTextFill } from 'react-icons/bs'
import ComFormCreateAgent from './FormCreateAgent'
import { Link } from 'react-router-dom'
import ComModalDeleteAgent from './DeleteAgent'

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
              <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
            </Link>

            <Sidebar.Collapse icon={MdMonitorHeart} label="Agentes ">
              <Sidebar.Item href="#">
                <ComFormCreateAgent />
              </Sidebar.Item>

              <Sidebar.Item href="#">
                <ComModalDeleteAgent />
              </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={BsFillFileTextFill} label="Mibs ">
              <Sidebar.Item href="#">Subir Mib</Sidebar.Item>
              <Sidebar.Item href="#">Todas las MIB</Sidebar.Item>
            </Sidebar.Collapse>

            <Link to="/ws">
              <Sidebar.Item >Websocket</Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  )
}
