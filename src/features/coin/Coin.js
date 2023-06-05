import { useSelector } from "react-redux"

function Coin() {
  const coinxyz = useSelector((state)=> state.counter.count)
  return (
    <div>
      <span className="value">Coin : {coinxyz}</span>
    </div>
  )
}

export default Coin
