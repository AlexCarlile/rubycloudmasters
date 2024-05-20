import React from 'react'

export default function ContactInfoInput({ phone, email, onPhoneChange, onEmailChange,filledCheck }) {
  return (
    <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
      <input
        className={phone === '+7' && filledCheck === false ? 'input error' : 'input'}
        style={{width: "45%", color: phone !== '' ? 'white' : 'grey'}}
        type="tel"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        placeholder="Номер телефона"
      />
      <input
        className={email === '' && filledCheck === false ? 'input error' : 'input'}
        style={{width: "50%", color: email !== '' ? 'white' : 'grey'}}
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="Электронная почта"
      />
    </div>
  )
}
