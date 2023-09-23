import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [multipler, setMultipler] = useState(1)
  const updateCount = () => {
    setCount(count+multipler)
  }
  const buyDoubleStuffed = () => {
   count >=10 && setMultipler(multipler*2)
   setCount(count-10)
  }
  const buyPartyPack = () => {
    count >=100 && setMultipler(multipler*5)
    setCount(count-100)
  }

  const buyFullFeast = () => {
    count >=1000 && setMultipler(multipler*10)
    setCount(count-1000)
  }
  return (
    <>
      <div className="App">
          <h1>Samosa Selector</h1>
          <h2>Count: {count} </h2>
          <img src="https://helpful-griffin-0a0ba5.netlify.app/samosa.png" onClick={updateCount} alt="Yummy Samosa" className="samosa" />
          <div className="container">
            <div className="upgrade">
              <h1>Double Stuffed</h1>
              <p>x2 per click</p>
              <button onClick={buyDoubleStuffed}>10 samsoas</button>
            </div>
            <div className="upgrade">
              <h1>Party Pack🎉</h1>
              <p>x5 per click</p>
              <button onClick={buyPartyPack}>100 samsoas</button>
            </div>
            <div className="upgrade">
              <h1>Full Feast🧑🏽‍🍳</h1>
              <p>x10 per click</p>
              <button onClick={buyFullFeast}>1000 samsoas</button>
            </div>
          </div>
      </div>
    </>
    
  )
}

export default App
