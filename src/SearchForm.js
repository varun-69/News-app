import React from 'react'
import nwimg from "../src/nwimg.jpg"
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center">
        <h1 className="text-4xl font-serif mr-4">AVP News | "Appko rakhe updated"---by Varun</h1>
        <img src={nwimg} className="h-16 w-auto ml-8 rounded-2xl" alt="newsimage" />
      </div>
      <input
        type='text'
        className='form-input rounded-3xl  '
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
