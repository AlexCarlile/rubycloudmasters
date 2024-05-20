import React from 'react'

export default function Checkbox({ checked, onChange, filledCheck }) {
  return (
    <div className="checkbox" style={{display: "flex", alignItems: "center", justifyContent: "flex-end", width: "100%", color: "white", marginTop: "20px"}}>
      <input
      style={{margin: "0!important", display: "flex", width: "30px", height: "30px",padding: "15px"}}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      />
      <p style={{margin: "0", color: !checked && !filledCheck ? "red" : "white"}}>
        Нажимая на кнопку, я соглашаюсь с политикой конфиденциальности.
      </p>
    </div>
      
  )
}
