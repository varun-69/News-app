import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className='btn-container'>
  <button
    disabled={isLoading}
    className="border-blue-800 rounded-full hover:bg-blue-500 hover:text-white hover:font-bold hover:text-lg"
    onClick={() => handlePage('dec')}
  >
    prev
  </button>
  <p>
    {page + 1} of {nbPages}
  </p>
  <button
    disabled={isLoading}
    className="rounded-full hover:bg-yellow-500 hover:text-white hover:font-bold hover:text-lg"
    onClick={() => handlePage('inc')}
  >
    next
  </button>
</div>

  )
}

export default Buttons
