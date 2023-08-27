import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Shop></Shop>
    </>
  )
}
