import React, { useEffect } from 'react'

function Modal({msg,msgColor,closeModal}) {
    useEffect(()=>{
        setTimeout(()=>{
            closeModal()
        },3000)
    });
    return (

        <div>
            <div className={`alert ${msgColor} alert-dismissible fade show `} role="alert">
   {msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeModal}></button>
</div>
        </div>
    )
}

export default Modal
