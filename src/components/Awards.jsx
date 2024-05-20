import { React, useRef } from 'react';
import { awardsList } from './databases/awardsList';
import AwardsCard from './ui/AwardsCard';

export default function Awards() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        const scrollContainer = scrollContainerRef.current;
        const containerWidth = scrollContainer.offsetWidth;
        let scrollDistance;
    
        // Здесь можно задать разные пропорции для прокрутки в зависимости от ширины экрана
        if (containerWidth >= 1920) {
          scrollDistance = containerWidth * 0.471; // Например, прокрутка на 50% ширины контейнера
        } else if (containerWidth >= 1600) {
          scrollDistance = containerWidth * 0.4785; // Например, прокрутка на 40% ширины контейнера
        } else if (containerWidth >= 1440) {
          scrollDistance = containerWidth * 0.4885; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 1276) {
          scrollDistance = containerWidth * 0.497; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 960) {
          scrollDistance = containerWidth * 0.628; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 768) {
          scrollDistance = containerWidth * 0.7388; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 540) {
          scrollDistance = containerWidth * 0.92; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 375) {
          scrollDistance = containerWidth * 1.039; // Например, прокрутка на 30% ширины контейнера
        }else {
          scrollDistance = containerWidth * 1.038; // Например, прокрутка на 30% ширины контейнера
        }
    
        scrollContainer.scrollLeft -= scrollDistance;
      }
    };

    const scrollRight = () => {
      if (scrollContainerRef.current) {
        const scrollContainer = scrollContainerRef.current;
        const containerWidth = scrollContainer.offsetWidth;
        let scrollDistance;
    
        // Здесь можно задать разные пропорции для прокрутки в зависимости от ширины экрана
        if (containerWidth >= 1920) {
          scrollDistance = containerWidth * 0.471; // Например, прокрутка на 50% ширины контейнера
        } else if (containerWidth >= 1600) {
          scrollDistance = containerWidth * 0.4785; // Например, прокрутка на 40% ширины контейнера
        } else if (containerWidth >= 1440) {
          scrollDistance = containerWidth * 0.4885; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 1276) {
          scrollDistance = containerWidth * 0.497; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 960) {
          scrollDistance = containerWidth * 0.628; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 768) {
          scrollDistance = containerWidth * 0.7388; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 540) {
          scrollDistance = containerWidth * 0.92; // Например, прокрутка на 30% ширины контейнера
        } else if (containerWidth >= 375) {
          scrollDistance = containerWidth * 1.039; // Например, прокрутка на 30% ширины контейнера
        }else {
          scrollDistance = containerWidth * 1.038; // Например, прокрутка на 30% ширины контейнера
        }
    
        scrollContainer.scrollLeft += scrollDistance;
      }
    };

    
    return (
        <div id="3" className="awards-container">
            <div className="item-title nominations flex container">
                <h2 className="section-title">
                  номинации
                </h2>
                <svg width="27" height="28" className="arrow" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
                </svg>
            </div>
            <div className="awards flex" ref={scrollContainerRef}>
                <svg onClick={scrollLeft} className="arrow1" width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.469482" width="50" height="50" rx="25" fill="white" fillOpacity="0.05"/>
                    <rect x="0.5" y="0.969482" width="49" height="49" rx="24.5" stroke="url(#paint0_linear_3_71)" strokeOpacity="0.4"/>
                    <path d="M10 25.4695L40 25.4695M40 25.4695L27.6471 13.1165M40 25.4695L27.6471 37.8224" stroke="white" strokeWidth="1.69706"/>
                    <defs>
                    <linearGradient id="paint0_linear_3_71" x1="5.54512e-08" y1="1.208" x2="55.6015" y2="8.82118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A2A2A2"/>
                    <stop offset="0.505" stopColor="#9D9D9D" stopOpacity="0.1"/>
                    <stop offset="1" stopColor="#989898"/>
                    </linearGradient>
                    </defs>
                </svg>
                {
                    awardsList.map((nomination) =>
                        <AwardsCard key={nomination.id} nomination={nomination}/>
                    )
                }
                <svg onClick={scrollRight} className="arrow2" width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.469482" width="50" height="50" rx="25" fill="white" fillOpacity="0.05"/>
                    <rect x="0.5" y="0.969482" width="49" height="49" rx="24.5" stroke="url(#paint0_linear_3_71)" strokeOpacity="0.4"/>
                    <path d="M10 25.4695L40 25.4695M40 25.4695L27.6471 13.1165M40 25.4695L27.6471 37.8224" stroke="white" strokeWidth="1.69706"/>
                    <defs>
                    <linearGradient id="paint0_linear_3_71" x1="5.54512e-08" y1="1.208" x2="55.6015" y2="8.82118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A2A2A2"/>
                    <stop offset="0.505" stopColor="#9D9D9D" stopOpacity="0.1"/>
                    <stop offset="1" stop-color="#989898"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
  )
}
