import React from 'react'

function Counter(props) {
  return (
    <div className='content'>
      <button onClick={props.increament}>+</button>
      <p>{props.count}</p>
      <button onClick={props.decreament}>-</button>
    </div>
  )
}

export default Counter
