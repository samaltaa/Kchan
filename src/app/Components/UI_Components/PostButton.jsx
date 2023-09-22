import React, { useState } from 'react'
import ReplyForm from './ReplyForm'

function Button() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () =>{
    setIsModalVisible(!isModalVisible)
  };

  let modal = null;

  if (isModalVisible) {
    modal = (
      <div
        className="modal"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "50%", // Adjust the width as needed
          //backgroundColor: "white",
          //boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          zIndex: 1000,
          overflowY: "auto",
        }}
      >
          <ReplyForm/>
      </div>
    )
  } 
  return (
    <div>
      <button onClick={toggleModal} className='button bg-slate-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border'>
        Responder
      </button>
      {modal}
    </div>
  )
}

export default Button