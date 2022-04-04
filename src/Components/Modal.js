import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.css'

function Modal({closeModal, closelist}) {
  return (
    <div className='modalBackground'> 
        <div className='modalContainer'>
            <div className='title'>
                <div> Are you sure you want to close the list?</div>
            </div>
            <div className='footer'>
                <button className='closeBtn' onClick={() => closeModal(false)}> Cancel </button>
                <Link to="/shoppinglist" className='continue-shopping'> 
                  <button className='continueBtn' onClick={closelist}> Continue </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Modal