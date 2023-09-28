import React, { useRef } from "react"
import { useUserContext } from "../utils"

export const Search = () => {
  const inputRef = useRef(null)

  const {setUserFilter} = useUserContext()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (inputRef.current) {
    
      setUserFilter(inputRef.current.value)
    }
  }

  return (
    <form className="text-gray-300 px-8" onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <input
          ref={inputRef}
          type="text"
          id="search"
          placeholder="Search User"
          className="w-full text-xl p-2.5 focus:outline-none rounded-lg bg-gray-800"
          onChange={(e) => e.target.value === "" ? setUserFilter(""): false}
        />
        <button
          type="submit"
          className="py-2.5 px-4 rounded-lg bg-cyan-500 text-gray-800 uppercase font-semibold"
        >
          Find
        </button>
      </div>
    </form>
  )
}
