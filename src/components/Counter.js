import React from 'react'

function Counter(props) {
  const {increament,decreament,count}= props
  return (
    <div className='content'>
      <button onClick={increament}>+</button>
      <p>{count}</p>
      <button onClick={decreament}>-</button>
    </div>
  )
}

export default Counter
