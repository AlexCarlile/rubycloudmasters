import { React, useState } from 'react'

export default function Participants() {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
        <div id="4" className="participants-container container">
            <h2 className="section-title">
                участникам
            </h2>
            <ul className="participants-list list-reset flex">
                <li className="participants-item">
                    
                    <p className="participants-item-txt">
                        Присоединяйтесь к&nbsp;нам в&nbsp;качестве участника премии Ruby Cloud Masters и&nbsp;получите уникальную возможность выделиться среди лидеров в&nbsp;сфере фармацевтического маркетинга и&nbsp;цифровых технологий.
                    </p>
                    <p className="participants-item-txt">
                        Участие в&nbsp;нашей премии позволит вам продемонстрировать свои достижения, подтвердить свою экспертность и&nbsp;получить заслуженное признание от&nbsp;профессионального сообщества. Станьте частью круга лидеров, создающих будущее в&nbsp;области фармацевтического маркетинга и&nbsp;цифровых технологий.
                    </p>
                </li>
                <li className="participants-item img"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <svg width="27" height="28" className={isHovered === true ? "arrow participants-arrow active " : "arrow participants-arrow"} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
                    </svg>
                </li>
            </ul>
        </div>
  )
}
