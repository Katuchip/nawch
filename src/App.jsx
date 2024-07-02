import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import InformacionCalamaFragment from './fragments/InformacionCalamaFragment'
function App() {
  const [platoFavorito, setPlatoFavorito] = useState("Piedras")
//  const [count, setCount] = useState(0)
// function handleClick() {} // Se reemplaza por función flecha.

const handleClick = () => {
  //platoFavorito = "cazuela" //no se puede-------
  setPlatoFavorito('Personas')
}

return (
    <>
      {/* paréntesis*/}
      {2*2} <br />
      {platoFavorito} <br />
      <hr />
      <button className="btn btn-primary" type="button" onClick ={handleClick}>
      Presiona para cambiar Piedras por Personas
      </button>
      <hr className="mb-4" />
      <InformacionCalamaFragment/>
    </>
  )
}

export default App
