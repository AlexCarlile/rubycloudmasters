import React from 'react'

export default function AwardsCard({ nomination }) {
  return (
    <div>
        <div className="awards-card">
            <div className="awards-head flex">
                <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.141 32.9371L29.3309 25.3856M24.141 32.9371L33.8492 9.29186M24.141 32.9371L16.2392 28.298M24.141 32.9371L4.79199 15.756M24.141 32.9371L22.785 26.8418M29.3309 25.3856L37.6572 8.5838M29.3309 25.3856L33.8492 9.29186M29.3309 25.3856L38.0535 8.35658M37.6572 8.5838L37.2298 6.66244M37.6572 8.5838L38.0535 8.35658M37.6572 8.5838V8.5838C36.6339 8.40344 35.58 8.53049 34.6289 8.94891L33.8492 9.29186M37.2298 6.66244L32.7069 1.89741M37.2298 6.66244L37.3362 6.63877L37.6556 6.56773M37.2298 6.66244V6.66244C36.4441 7.4076 35.3584 7.74839 34.2877 7.58593L33.5689 7.47686M32.7069 1.89741L29.3345 1.04839L25.9285 1.80609M32.7069 1.89741L25.9285 1.80609M32.7069 1.89741L33.5689 7.47686M32.7069 1.89741L37.6556 6.56773M33.8492 9.29186L22.785 26.8418M33.8492 9.29186L33.5689 7.47686M33.8492 9.29186L31.6834 9.4795C30.7436 9.56092 29.8211 9.78157 28.9461 10.1342L26.8007 10.999M19.1888 10.6759L11.6731 6.57661M19.1888 10.6759L24.4661 3.73067M19.1888 10.6759L19.3804 11.5372M19.1888 10.6759L26.3732 9.0776M19.1888 10.6759L11.9511 12.286M16.2392 28.298L1.62837 16.5988M16.2392 28.298L4.79199 15.756M16.2392 28.298L0.960267 16.6084M1.62837 16.5988L1.20094 14.6775M1.62837 16.5988L0.960267 16.6084M1.62837 16.5988V16.5988C2.41892 16.0603 3.3515 15.7684 4.30802 15.7601L4.79199 15.756M1.20094 14.6775L3.17072 8.46806M1.20094 14.6775L0.562318 14.8195M1.20094 14.6775V14.6775C2.14839 15.0668 3.23283 14.9079 4.02873 14.2631L4.39404 13.9671M3.17072 8.46806L5.86518 6.2694L9.59046 5.44067M3.17072 8.46806L9.59046 5.44067M3.17072 8.46806L4.39404 13.9671M3.17072 8.46806L0.562318 14.8195M4.79199 15.756L22.785 26.8418M4.79199 15.756L4.39404 13.9671M4.79199 15.756L6.88525 14.931C7.91249 14.5262 9.00231 14.3031 10.106 14.2718L12.3785 14.2073M22.785 26.8418L12.3785 14.2073M22.785 26.8418L26.8007 10.999M22.785 26.8418L19.3804 11.5372M25.9285 1.80609L17.7595 3.62338M25.9285 1.80609L24.4661 3.73067M9.59046 5.44067L11.6731 6.57661M9.59046 5.44067L17.7595 3.62338M12.3785 14.2073L11.9511 12.286M12.3785 14.2073V14.2073C14.5519 13.1226 16.8242 12.2486 19.1643 11.5973L19.3804 11.5372M26.8007 10.999L26.3732 9.0776M26.8007 10.999L26.6483 10.9967C24.2144 10.9608 21.7822 11.1417 19.3804 11.5372V11.5372M4.39404 13.9671L11.6731 6.57661M4.39404 13.9671L6.65234 13.8647C7.75566 13.8147 8.84185 13.573 9.86233 13.1506L11.9511 12.286M11.6731 6.57661L17.7595 3.62338M11.6731 6.57661L11.9511 12.286M17.7595 3.62338L24.4661 3.73067M24.4661 3.73067L33.5689 7.47686M24.4661 3.73067L26.3732 9.0776M33.5689 7.47686L31.399 8.30641C30.5303 8.63852 29.6177 8.84155 28.6901 8.90903L26.3732 9.0776M0.562318 14.8195L0.960267 16.6084M37.6556 6.56773L38.0535 8.35658" stroke="white" stroke-width="0.8"/>
                </svg>
                <h3 className="awards-card-title flex">
                    {nomination.title}
                </h3>
            </div>

            <p className="awards-card-txt">
                {nomination.text1}
            </p>
            <p className="awards-card-txt">
                {nomination.text2}
            </p>
        </div>
    </div>
  )
}