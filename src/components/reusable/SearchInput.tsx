import React, { memo } from 'react'

interface SearchInputProps {
  handler(event: React.FormEvent<HTMLInputElement>): void,
  placeholder: string,
}

const SearchInput = memo(( {handler, placeholder} : SearchInputProps) => {

  return (
    <form className="max-w-md mx-auto mb-4 bg-white">
      <div className="relative bg-white">
        <input
          type='text'
          className="block bg-white w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          onChange={handler}
        />
      </div>
    </form>

  )
})

export default SearchInput