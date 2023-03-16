import React from 'react'

export default function Checkbox({data,onClick}) {
  return (
    <div className='d-flex border-bottom mb-1'>
        <input type="checkbox" className='me-2' onClick={onClick}/>
        <label>{data}</label>
    </div>
  )
}
