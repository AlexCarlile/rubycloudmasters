import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
        <div className="hero-container container flex">
            <div className="hero-block flex">
                <h1 className="hero-title">
                    награда для лидеров <br />
                    в&nbsp;сфере фармацевтического маркетинга и&nbsp;цифровых <br />технологий
                </h1>
            </div>


            <ul className="hero-list flex list-reset">
                <li className="hero-list-item">
                    <p className="item-dscr">
                        Выделяем наиболее успешные кейсы, которые вдохновляют фармацевтический бизнес к&nbsp;более быстрой адаптации в&nbsp;новых принципах цифровой экономики.
                    </p>
                </li>
                <li className="hero-list-item second">
                    <p className="item-dscr">
                        В&nbsp;команду ведущих экспертов премии входят профессионалы с&nbsp;экспертизой в&nbsp;BE, SFE, маркетинге и&nbsp;обладают экспертизой внедрения инструментов big data driven.
                    </p>
                </li>
            </ul>
        </div>


    </section>
  )
}
