import { React, useState } from 'react'

export default function ExpertCard({ expert, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="expert-card" style={{backgroundImage: `url(${expert.img})`}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} 
    >
      
      <svg width="27" height="28" className={isHovered === true ? "arrow expert-arrow active " : "arrow expert expert-arrow"} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
      </svg>
    </div>
  )
}
