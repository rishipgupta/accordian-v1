import React from 'react'
import AccordianItem from './AccordianItem'

const Accordian = ({ data }) => {


  return (
    <div className='accordian'>
      {data.map((el, i) => <AccordianItem key={i} num={i} title={el.title} text={el.text} />)}
    </div>
  )
}

export default Accordian

