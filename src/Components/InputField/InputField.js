import React from 'react'

const InputField = ({value, name, placeholder,onChange}) => {
  return (
    <div>
      <input
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      ></input>
    </div>
  )
}

export default InputField
