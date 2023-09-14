"use client";
import React, { useEffect, useState } from "react";
import Button from "./UI_Components/PostButton";

function Thread() {
  const [threadData, setThreadData] = useState({});
  const [replies, setReplies] = useState([]);

  //simulated data for thread TODO: replace with data fetching logic
  useEffect(() => {
    //simulated thread data
    const threadData = {
      id: 1,
      title: "No sabe tu",
      content:
        "Hermano, Trujillo era un bicho malo, Mandaba aquí como si fuera su finca. No podías abrir la boca si no querías meterte en un lío. Y eso de su ego gigante, ¡qué chiquitico! Se llenó los bolsillos con la plata de todos nosotros sin piedad. Esa época de Trujillo fue como una pesadilla, de verdad que da rabia pensar en eso.",
      creator: "anonymous",
      timestamp: "3 hours ago",
    };

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

    setThreadData(threadData);
    setReplies(replies);
  }, []);
  return (
    <div className=" p-4 flex flex-col items-center text-white">
      <div className="w-2/3 bg-blue-500 px-4">
        <h1 className="text-2xl font-semibold">{threadData.title} </h1>
        <p className="text-gray-600">
          Posted by {threadData.creator} • {threadData.timestamp} • thread
          ID:88123
        </p>
      </div>

      <div className="w-2/3 bg-blue-400 px-1  mb-4">
        <img
          src="https://assets.editorial.aetnd.com/uploads/2009/11/gettyimages-515429328.jpg"
          className="h-15 w-15"
        />

        <p className="mt-4">{threadData.content}</p>
      </div>

      {replies.map((reply) => (
        <div key={reply.id} className="w-2/3 bg-blue-400 text-white p-4 mb-2">
          <p className="text-gray-600">
            Posted by {reply.creator} • {reply.timestamp} • thread: 88123
          </p>
          <p className="text-white mt-2">{reply.content}</p>
        </div>
      ))}

      {/* Reply Form (to be implemented) */}
      <div className="flex flex-col w-2/3 bg-white p-4 rounded-lg">
        <Button />
        {/* Add a reply form here */}
      </div>
    </div>
  );
}

export default Thread;
