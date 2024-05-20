import React from 'react'

export default function SubmitButton({ onClick, filledCheck, success }) {
  return (
    <div style={{ alignSelf: "flex-end" }}>
      <button className="submit-btn btn-reset" onClick={onClick}>Отправить</button>
      <p style={{display: !filledCheck ? "block" : "none", color: "red"}}>Заполните все поля для заявки</p>
      <p style={{display: success ? "block" : "none", color: "green", textAlign: "center"}}>Ваша заявка принята!</p>
    </div>

  )
}
