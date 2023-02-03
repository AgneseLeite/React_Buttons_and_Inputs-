import  React, { useRef, useEffect } from 'react'
import './App.css'
import ButtonGroup from './components/ButtonGroup'
import DisabledBtn from './components/DisabledBtn'
import ButtonGroup_2 from './components/ButtonGroup_2'
import ButtonGroup_3 from './components/ButtonGroup_3'
import ButtonGroup_4 from './components/ButtonGroup_4'
import ButtonGroup_5 from './components/ButtonGroup_5'
import ButtonGroup_6 from './components/ButtonGroup_6'
import ButtonGroup_7 from './components/ButtonGroup_7'

function App() {

  console.log("Render");

  return (
    <div className="App">
      
          <h1>Inputs and Buttons</h1>
          <ButtonGroup />
          <DisabledBtn />
          <ButtonGroup_2 />
          <ButtonGroup_3 />
          <ButtonGroup_4 />
          <ButtonGroup_5 />
          <ButtonGroup_6 />
          <ButtonGroup_7 />
    </div>
  )
}

export default App
