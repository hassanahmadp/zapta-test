import React from 'react'

type Props = {
  label: string
  id: string
  inputProps: unknown
}

export const FormInput = ({label, id, ...inputProps}: Props) => {
  return (
    <div className="w-full">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <br />
      <input
        className="bg-gray-500 rounded-md p-1.5 w-full focus:outline-none mt-2"
        {...inputProps}
      />
    </div>
  )
}