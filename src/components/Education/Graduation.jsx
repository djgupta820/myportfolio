import React from 'react'

const Graduation = (props) => {
  return (
    <div className='estyle'>
        <h3>{props.course}</h3>
        <p>{props.university}</p>
        <p>{props.yos} - {props.yoc}</p>
        <p>{props.score}</p>
    </div>
  )
}

export default Graduation