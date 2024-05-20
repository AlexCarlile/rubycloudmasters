import React from 'react';

export default function Modal({expert, onCloseModal}) {
    const checkComponent = "dscr" in expert;
  
    return (
    <div className="modal active" onClick={onCloseModal}>
        <div className="modal-container" onClick={e => e.stopPropagation()}>
            <span className="cross" onClick={onCloseModal}></span>
            <ul className="modal-list list-reset flex">
                <li className="modal-list-item photo">
                    <img className="expert-photo img" src={expert.imgNew}></img>
                </li>
                <li className="modal-list-item txt">
                    <h3 className="modal-item-title">
                        {expert.name}
                    </h3>
                    <p style={{textTransform: "uppercase", paddingTop: "20px", margin: "0", fontSize: "20px"}}>Эксперт премии</p>
                    <p className="modal-item-dscr" style={{fontSize: "16px", fontWeight: "200"}}>
                        {checkComponent ? `${expert.dscr}` : ""}
                    </p>
                    <ul className='modal-item-list'>
                        {
                            expert.about.map((dscr, index) =>
                                <li key={index} style={{fontSize: "16px", fontWeight: "200"}}>
                                    {dscr}
                                </li>
                        )}
                    </ul>

                </li>
            </ul>
        </div>
    </div>
  )
}
