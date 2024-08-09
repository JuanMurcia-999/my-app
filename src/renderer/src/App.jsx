import ComSidebar from './components/Sidebar'
import { Flowbite } from 'flowbite-react'
import ComNavbar from './components/Navbar'
import Home from './pages/Home/Home'
import Detalle from './pages/Detalles/Detalle'
import { Homeprovaider } from './contexts/HomeProvaider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  console.log('Cragdo APP')

  return (
    <>
      <Flowbite>
        <BrowserRouter>
          <Homeprovaider>
            <ComNavbar />
            <ComSidebar />

            <div className="lg:pl-[18rem]  mt-[4.7rem] fixed  w-full h-[100vh] bg-amber-300 dark:bg-gray-700  scroll-auto">
              <main>
                <Routes>
                  <Route path={'/'} element={<Home />} />

                  <Route path={'/detalles/:Ip/:Id/:Host/:type'} element={<Detalle />} />
                </Routes>
              </main>
            </div>
          </Homeprovaider>
        </BrowserRouter>
      </Flowbite>
    </>
  )
}

export default App
