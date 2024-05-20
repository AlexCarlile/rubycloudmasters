import React from 'react'

export default function TextInput({ value, onChange, name, filledCheck}) {
  return (
    <input className={value === '' && filledCheck === false ? 'input error' : 'input'}
      style={{color: value !== '' ? 'white' : 'grey'}}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={name}
    />
  )
}
