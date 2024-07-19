import React from 'react'

const EditInputField = ({id, placeholder, type}) => {
  return (
    <div className="w-full mt-6">
        <input type={type} id={id} className="mt-2 p-4 w-full border-2 rounded-lg text-gray-800 border-gray-600 bg-gray-50" placeholder={placeholder} />
    </div>
  )
}

export default EditInputField