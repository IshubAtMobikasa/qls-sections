import React from 'react'
import { Form } from 'react-bootstrap'


const InputSearch = ({title,example,placeholder,color}) => {
  return (
    <div className="inputSearch">
        <p style={{color:color}}>
            {title}
        </p>
        <Form.Control type="text" placeholder={placeholder} >
            
        </Form.Control>

        <button className={`btn`} style={{backgroundColor:color}}>Search</button>
        <span className='text-black-50'>Ex: {example}</span>
    </div>
  )
}

export default InputSearch