import React from 'react'
import TextList from './ui/TextList'

export default function About() {
    const txt_list = [
        {
            id: 1,
            text: "В международной фармацевтической бизнес-среде системный подход уверенно входит в практику организационного менеджмента. Развертывание экосистемы – сложный процесс, который чаще называется цифровой трансформацией. Трансформация реализуется командой профессионалов.",
        },

        {
            id: 2,
            text: "Успешно реализованная цифровая трансформация позволяет добиться выдающихся управленческих результатов и является основой для систематизации управления бизнесом.",
        },

        {
            id: 3,
            text: "Премия Ruby Cloud Masters — это уникальное отличие, которое признает и награждает лидеров в области фармацевтического маркетинга и цифровых технологий. Эта премия является признанием выдающихся достижений и инноваций в сфере, а также поддерживает развитие профессионального сообщества.",
        },

        {
            id: 4,
            text: "Участие в премии позволяет выделиться среди конкурентов, укрепить свою репутацию и подтвердить собственную экспертность. Станьте частью престижного сообщества лидеров в фармацевтическом маркетинге и цифровых технологиях!",
        }
    ]
  
    return (
        <div id="1" className="about-container container">
            <ul className="about-list list-reset flex">
                <li className="about-list-item txt flex">
                    <div className="item-title flex">
                        <h2 className="section-title">
                            О премии
                        </h2>
                        <svg width="27" height="28" className="arrow" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <ul className="item-txt-list flex">
                        {
                            txt_list.map((txt) =>
                            <TextList key={txt.id} txt={txt}/>
                        
                        )}
                    </ul>
                </li>
                <li className="about-list-item img">

                </li>
            </ul>
        </div>
  )
}
