import React from 'react'
import { useParams } from 'react-router-dom'
const WpChat = () => {
  const param = useParams()
  return (
    <>
    <h2>chat : {param.uniqueId}</h2>
    </>
  )
}

export default WpChat