import React, {useEffect, useState} from 'react'

function ThreadReply() {
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        //simulated replies data
    const replies = [
        {
          id: 1,
          content: "compai con el jefe no",
          creator: "anonymous",
          timestamp: "1 hour ago",
        },
        {
          id: 2,
          content: "Dios bendiga la raza quisqueyana y rejuvenezca su gloria",
          creator: "anonymous",
          timestamp: "30 minutes ago",
        },
        {
          id: 3,
          content: "oye ahora",
          creator: "anonymous",
          timestamp: "1 hour ago",
        },
        {
          id: 4,
          content: "si el jefe tuviera vivo tu no tuviera hablando mielda",
          creator: "anonymous",
          timestamp: "30 minutes ago",
        },
        {
          id: 5,
          content: "basado",
          creator: "anonymous",
          timestamp: "1 hour ago",
        },
        {
          id: 6,
          content: "y ya dique por deci eso tu ere duro rptm",
          creator: "anonymous",
          timestamp: "30 minutes ago",
        },
      ];
      setReplies(replies)
    }, [])
  return (
    <div>
        {replies.map((reply) => (
        <div key={reply.id} className="w-2/3 bg-blue-400 text-white p-4 mb-2">
          <p className="text-gray-600">
            Posted by {reply.creator} • {reply.timestamp} • thread: 88123
          </p>
          <p className="text-white mt-2">{reply.content}</p>
        </div>
      ))}
    </div>
  )
}

export default ThreadReply