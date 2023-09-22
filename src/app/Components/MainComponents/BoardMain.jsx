import React, { useEffect, useState } from 'react'
import Thread from './Thread'

const  BoardMain = () => {
  const [boards, setBoards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/boards')
      .then(response => response.json())
      .then(data => setBoards(data));
  }, [])

  return (
    <div className='container mx-auto'>
      
      <div className='flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3 gap-4'>
        {boards.map(board => (
          <div key={board._id} className='bg-black p-4 rounded shadow-md'>
          <h1 className='text-3xl font-bold my-4'>Tablon General</h1>
          <h2>{board.boardID}</h2>
          {board.image && ( // Render the image if it exists
            <div
              style={{
                width: '22rem', // Set width to maintain the golden ratio (w-12)
                height: '23rem', // Set height to maintain the golden ratio (h-13)
              }}
            >
              <img
                src={board.image} alt="Uploaded" 
                className="w-full h-full object-cover" // Make the image cover the entire container
              />
            </div>
          )}
            <h2 className='text-xl font-semibold'>{board.title}</h2>
            <p className='text-white'>{board.description}</p>
            <div className=''>
              <h1 className='font-bold text-xl mt-3 mb-3'>Hilos:</h1>
              <Thread/>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default BoardMain