import React from 'react'

export default function InputField({name, label, value, onChange}) {
  return (
    <div className="w-full mb-3">
      <label htmlFor={name} className="block text-md text-gray-800">{label}:</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-64 bg-gray-100 text-gray-600 border border-gray-200 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"
      />
    </div>
  )
}