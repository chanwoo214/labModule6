import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import BigCats from './components/BigCats'
import SingleCat from './components/SingleCat'
import Emoji from './components/Emoji'
import AddCatForm from './components/AddCatForm'
import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)


  return (
 <>
    {/* 
  <Greeting name="Chan">
    Have a good day!
  </Greeting>
  
 */}

{/*
<SingleCat>
 </SingleCat>
*/}

{/*
 <div>
      <h1>Welcome to my Emoji App! Here's a Mood emoji:</h1>
      <Emoji />
    </div>
*/}

<Calculator>
  
</Calculator>
 </>
  )


}

export default App
