import {useState} from "react"

function Counter() {
    const [count, setcount] = useState(0)
  return (
    <div>
       <button className='button' aria-label='Increment value' onClick={() => {setcount(count + 1)}}> + </button>

<span className="value">Count : {count}</span>
 
<button className='button' aria-label='Decrenebt value' onClick={() => {setcount(count-1)}}> - </button>
    </div>
  )
}

export default Counter
