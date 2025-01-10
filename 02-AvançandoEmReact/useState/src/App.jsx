import './App.css'
import { useState } from 'react'

import Data from './components/Data'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUsername from './components/ShowUsername'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000}
]

function App() {

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <div className='App' style={{ paddingBottom: "400px" }}>
        <h1>useState</h1>
        <Data/>
        <ListRender/>
        <ConditionalRender/>
        <ShowUsername name="Nicolas"/>
        <CarDetails brand="VW" km={41233} color="black"/>

        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))}

        <Fragment/>
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage} />
      </div>
    </>
  )
}

export default App
