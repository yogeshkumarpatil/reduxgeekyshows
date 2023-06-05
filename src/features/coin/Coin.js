import { useSelector } from "react-redux"

function Coin() {
  const coinxyz = useSelector((state)=> state.counter.count)
  const themeTextColor = useSelector((state)=> state.theme.color)
  return (
    <div>
      <span className="value" style={{color:themeTextColor}}>Coin : {coinxyz}</span>
    </div>
  )
}

export default Coin
