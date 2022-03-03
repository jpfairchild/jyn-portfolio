import React, { useState, useEffect } from 'react'

export const DelayedFallback = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {show && <h3> </h3>}
    </>
  )
}
export default DelayedFallback
