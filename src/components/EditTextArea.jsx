import React from 'react'

const EditTextArea = ({name, handleInputChange, value}) => {
  return (
    <textarea name={name} value={value} className="mt-2 p-4 w-full h-36 border-2 rounded-lg text-gray-800 border-gray-600 bg-gray-50 resize-none" placeholder='User Description' onChange={handleInputChange}></textarea>
  )
}

export default EditTextArea