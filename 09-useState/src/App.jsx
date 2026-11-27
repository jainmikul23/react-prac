import React,{useState} from 'react'

const App = () => {
  // const [num, setnum] = useState('Hiii')
  // function setNum(){
  //   setnum(90)
  // }
  // function reSet(){
  //   setnum('Hiii')
  // }
  const [num, setnum] = useState(0)
function increase(){
  setnum(num+1)
}
function decrease(){
  setnum(num-1)
}
  return (

    <div className='pro'>
       {/* <h1>The value of num is {num}</h1>
      <button onClick={setNum}>Click</button>
      <button onClick={reSet}>Reset</button>   */}
      
      <h1>{num}</h1>
      <div className='btn'>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrese</button>
      <button onClick={()=>{
        setnum(num+5)
      }}>Jump by 5</button>
      </div>

    </div>
  )
}

export default App
