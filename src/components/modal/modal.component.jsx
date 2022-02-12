import React, { useState, useEffect } from "react"
import './modal.styles.scss'

const Modal = (props) => {

    if (!props.showModal) return null

    return (
        <div className="modal">
            <div className="modal__header">
                Modal Title
            </div>
            <div className="modal__body">
                Modal Body
            </div>
            <div className="modal__footer">
                Model CTA/s
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal