'use client'

import { useState, useEffect } from 'react'
import { Button} from 'flowbite-react'
import { Datepicker } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
import { useDetallesConext } from '../../../contexts/DetallesProvaider'
import { Get_history_filter } from '../../../services/Services-view-sensors'

const Body = {

  id_agent: 0,
  id_adminis: 0,
  id_sensor: 0,
  datebase: 'now',
  timebase: 'now',
  daterange: '-0 day',
  timerange: '-6 hour',
  limit: 100,
  offset: 0
}

export function BarFilters({ infoAgent }) {
  const [limit, setLimit] = useState(100)
  const [time, setTime] = useState('-1 hour')
  const [day, setDay] = useState('-0 days')
  const [selectedDate, setSelectedDate] = useState('now')
  const { datasensor, setDatasensor, setDatesgraf,setTypegraf } = useDetallesConext()

  const handleClear = () => {
    setLimit(100)
    setTime('-6 hour')
    setDay('-0 day')
    setSelectedDate('now')
    Body.limit=0
  }
  const handletype= (value)=>{
    setTypegraf(value)
  }

  const handleLimit = (limit) => {
    setLimit(limit)
  }

  const handleTime = (time) => {
    setTime(time)
  }
  const handleDay = (day) => {
    setDay(day)
    
  }

  const handleDate = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    const [year, month, day] = formattedDate.split('-');
    const shortYear = year; 
  
    setSelectedDate(`${shortYear}-${month}-${day}`);
  }

  useEffect(() => {

    Body.id_agent = datasensor.id_agent
    Body.id_adminis = datasensor.id_adminis
    Body.id_sensor = datasensor.id_sensor
    Body.datebase = selectedDate
    Body.timebase = selectedDate
    Body.daterange = day
    Body.timerange = time
    Body.limit = limit

    console.log(Body)
    Get_history_filter(Body).then((data) => setDatesgraf(data))

  }, [time, day, limit, selectedDate, datasensor])

  return (
    <div className="flex flex-wrap gap-2 m-[15px]">
      <Button onClick={handleClear}>Limpiar</Button>
      <Dropdown color="light" label="Limite" dismissOnClick={true}>
        <Dropdown.Item onClick={() => handleLimit(null)}>Todos</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLimit(200)}>200</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLimit(250)}>250</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLimit(300)}>300</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLimit(400)}>400</Dropdown.Item>
      </Dropdown>

      <Dropdown color="light" label="Time" dismissOnClick={true}>
        <Dropdown.Item onClick={() => handleTime('-0 hour')}>Ninguno</Dropdown.Item>
        <Dropdown.Item onClick={() => handleTime('-5.5 hour')}>30 Minutos </Dropdown.Item>
        <Dropdown.Item onClick={() => handleTime('-7 hour')}>2 Horas</Dropdown.Item>
        <Dropdown.Item onClick={() => handleTime('-11 hour')}>6 Horas</Dropdown.Item>
        <Dropdown.Item onClick={() => handleTime('-18 hour')}>12 Horas</Dropdown.Item>
        <Dropdown.Item onClick={() => handleTime('-32 hour')}>24 Horas</Dropdown.Item>
      </Dropdown>

      <Dropdown color="light" label="Dias" dismissOnClick={true}>
      <Dropdown.Item onClick={() => handleDay('-0 days')}> Ninguno</Dropdown.Item>
        <Dropdown.Item onClick={() => handleDay('-1 day')}> 1 Dia</Dropdown.Item>
        <Dropdown.Item onClick={() => handleDay('-7 day')}> 7 Dias </Dropdown.Item>
        <Dropdown.Item onClick={() => handleDay('-15 day')}> 15 Dias </Dropdown.Item>
        <Dropdown.Item onClick={() => handleDay('-30 day')}> 30 Dias </Dropdown.Item>

      </Dropdown>

      <Dropdown color="light" label="grafica" dismissOnClick={true}>
        <Dropdown.Item onClick={() => handletype('bar')}>Barras</Dropdown.Item>
        <Dropdown.Item onClick={() => handletype('line')}>Lineas</Dropdown.Item>
      </Dropdown>

      <Datepicker onSelectedDateChanged={handleDate} />
    </div>
  )
}
