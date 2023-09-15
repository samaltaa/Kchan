"use client";
import React, { useEffect, useState } from "react";
import Button from "../UI_Components/PostButton";
import ThreadReply from "../UI_Components/ThreadReply";

function Thread() {
  const [threadData, setThreadData] = useState({});

  //simulated data for thread TODO: replace with data fetching logic
  useEffect(() => {
    //simulated thread data
    const threadData = {
      id: 1,
      title: "No sabe tu",
      content:
        "Hermano, Trujillo era un bicho malo, Mandaba aquí como si fuera su finca. No podías abrir la boca si no querías meterte en un lío. Y eso de su ego gigante, ¡qué chiquitico! Se llenó los bolsillos con la plata de todos nosotros sin piedad. Esa época de Trujillo fue como una pesadilla, de verdad que da rabia pensar en eso.",
      creator: "u/anonimo753912",
      timestamp: "3 hours ago",
    };

    setThreadData(threadData);
  }, []);
  return (
    <div className=" p-4 flex flex-col items-center text-white">
      <div className="w-2/3 bg-blue-500 px-4">
        <h1 className="text-2xl font-semibold">{threadData.title} </h1>
        <p className="text-gray-600">
          <span className="text-yellow-300 font-bold">{threadData.creator}</span> • {threadData.timestamp} • thread
          ID:88123
        </p>
      </div>

      <div className="w-2/3 bg-blue-400 px-1  mb-4">
        <img
          src="https://assets.editorial.aetnd.com/uploads/2009/11/gettyimages-515429328.jpg"
          className="h-15 w-15"
        />

        <p className="mt-4 mb-4">{threadData.content}</p>
        <Button/>
        <div className="w-2/3 mt-4">
        {/*TODO: place replies components here */}
        <ThreadReply />
      </div>

      </div>
      
      {/* TODO: add reply form component */}

    </div>
  );
}

export default Thread;
