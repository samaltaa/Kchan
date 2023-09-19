"use client";
import React, { useEffect, useState } from "react";
import Button from "../UI_Components/PostButton";
import ThreadReply from "../UI_Components/ThreadReply";

function Thread() {
  const [threads, setThreadData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/threads')
      .then(response => response.json())
      .then(data => setThreadData(data));
  }, []);

  return (
    <div className="p-4 flex flex-col items-center text-white">
      {threads.map((thread) => (
        <div key={thread.id} className="w-2/3 bg-blue-400 px-4 mb-4">
          <h1 className="text-2xl font-semibold">{thread.title}</h1>
          <p className="text-gray-600">
            <span className="text-yellow-300 font-bold">{thread.creator}</span> • {thread.timestamp} • thread ID: {thread._id}
          </p>
          <div className="w-2/3 bg-blue-400 px-1 mb-4">
          {thread.image && (
            <div
              style={{
                width: '12rem',
                height: '13rem',
              }}
            >
              <img
                src={thread.image}
                className="w-full h-full object-cover"
              />
            </div>
            )}
            <p className="mt-4 mb-4">{thread.content}</p>
            <Button />
            <div className="w-2/3 mt-4">
              <ThreadReply />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thread;