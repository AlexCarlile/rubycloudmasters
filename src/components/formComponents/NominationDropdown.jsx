import React from 'react'

export default function NominationDropdown({ nominations, selectedNomination, onSelectNomination, filledCheck }) {

  return (
    <select 
      style={{ 
        borderBottom: !filledCheck && (selectedNomination === "" || selectedNomination === "0") ? "1px solid red" : "1px solid white",
        color: selectedNomination === "0" ? "gray" : (selectedNomination ? "white" : "gray")
      }}
      value={selectedNomination} 
      onChange={(e) => onSelectNomination(e.target.value)}
    >
      <option value='0'>—Выберите номинацию из списка—</option>
      {nominations.map((nomination) => (
        <option key={nomination.id} value={nomination.id}>{nomination.title}</option>
      ))}
    </select>
  )
}
