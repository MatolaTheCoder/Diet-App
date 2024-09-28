// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function InputField({name, label, type,value, onChange}) {
  return (
    <div className="w-full mb-3">
      <label htmlFor={name} className="block text-md text-gray-800">{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        required
        onChange={onChange}
        className="w-64 bg-gray-100 text-gray-600 border border-gray-200 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"
      />
    </div>
  )
}