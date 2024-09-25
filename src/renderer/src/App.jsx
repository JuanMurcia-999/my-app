import ComSidebar from './components/Sidebar'
import { Flowbite } from 'flowbite-react'
import ComNavbar from './components/Navbar'
import Home from './pages/Home/Home'
import Detalle from './pages/Detalles/Detalle'
import { Homeprovaider } from './contexts/HomeProvaider'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import WebSocketComponent from './pages/RealTime/Real_time'
import Mibs from './pages/mibs/mibs'
import Operation from './pages/Operations/Operations'
import Traps from './pages/Traps/Traps'
import { useEffect } from 'react'


function App() {
  console.log('Cragdo APP')

    useEffect(() => {
     
    console.log( localStorage.getItem('serverIp'))
    
    }, []);

  return (
    <>
      <Flowbite>
        <HashRouter>
          <Homeprovaider>
            <ComNavbar />
            <ComSidebar />

            <div className="lg:pl-[18rem]  mt-[4.7rem] fixed  w-full h-[100vh] bg-slate-100 dark:bg-gray-700  scroll-auto">
              <main>
                <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/detalles/:Ip/:Id/:Host/:type'} element={<Detalle />} />
                  <Route path="/mibs" element={<Mibs />} />
                  <Route path="/Traps" element={<Traps />} />
                  <Route path="/Operations" element={<Operation />} />
                </Routes>
              </main>
            </div>
          </Homeprovaider>
        </HashRouter>
      </Flowbite>
    </>
  )
}

export default App
