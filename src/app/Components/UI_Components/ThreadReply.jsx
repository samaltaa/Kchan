import React, {useEffect, useState} from 'react'

function ThreadReply() {
    const [replies, setReplies] = useState([]);
    const [visibleReplies, setVisibleReplies] = useState(3); // Number of initially visible replies
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
      fetch('http://localhost:3001/replies')
        .then(response => response.json())
        .then(data => setReplies(data));
    }, [])

    const handleShowMore =()=>{
      setVisibleReplies((prevVisibleReplies) => prevVisibleReplies + 10);
    }
  return (

    <div>
        {replies.slice(0, visibleReplies).map((reply) => (
        <div
            key={replies.id}
            className="border bg-slate-900 text-white p-2 mb-2"
            style={{
                width: '100%', // Adjust the width as needed
                height: 'auto', // Adjust the height as needed
            }}
    >
      <div className="flex">
        <p className="text-gray-600 px-2">
          <span className="text-yellow-300 font-bold">~ {reply.creator}</span> • {reply.timestamp} • hilo: #88123
        </p>
      </div>
      {reply.image && ( // Render the image if it exists
        <div
          style={{
            width: '12rem', // Set width to maintain the golden ratio (w-12)
            height: '13rem', // Set height to maintain the golden ratio (h-13)
          }}
        >
          <img
            src={`http://localhost:3001/${reply.image}`} alt="Uploaded" 
            className="w-full h-full object-cover" // Make the image cover the entire container
          />
        </div>
      )}
      <p className='text-white p-5'>{reply.content}</p>
      </div>
      ))}

      {replies.length > visibleReplies && (
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md mt-2 mb-2'
          onClick={handleShowMore}
          >
          Ver Mas...
        </button>
      )}
    </div>
  )
}

export default ThreadReply