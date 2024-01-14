import React from 'react'
import { useParams } from 'react-router-dom'
const Gadgets = () => {
    const {productType} = useParams();
  return (
    <div>Gadgets:{productType}</div>
  )
}

export default Gadgets