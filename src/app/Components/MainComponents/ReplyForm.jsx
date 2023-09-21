"usec client";
import React, { useState, useEffect } from "react";
import axios from "axios";


const ReplyForm = () => {
  const [creator, setCreator] = useState("Anonymous");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

// Function to handle creator input change
  const handleCreator = (e) => {
        setCreator(e.target.value);
      };
    
 // Function to handle subject input change
  const handleSubject = (e) => {
        setSubject(e.target.value);
      };
    
  // Function to handle content input change
  const handleContent = (e) => {
        setContent(e.target.value);
      };
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await axios.post("", {
            creator,
            subject,
            content,

        });

        console.log("Respuesta enviada:", response.data);

        setSubject("");
        setContent("");
    } catch(error){
        console.error("Error", error)
    }
  };

  return (
    <div className=" w-1/2">
      <form
        className="bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="pr-2 text-gray-700 text-sm font-bold mb-2">
            Creator:
          </label>
          <input
            creator="creator"
            type="text"
            value={creator}
            onChange={handleCreator}
            className="w-50 text-black"
          />
        </div>

        <div className="mb-4">
          <label className="pr-2 text-gray-700 text-sm font-bold mb-2">
            Subject:
          </label>
          <input
            subject="subject"
            type="text"
            value={subject}
            onChange={handleSubject}
            className="w-50 text-black"
          />
        </div>

        <div className="mb-2 flex items-center">
          <label className="pr-2 text-gray-700 text-sm font-bold mb-2">
            Content:
          </label>
          <textarea
            content="content"
            type="text"
            value={content}
            onChange={handleContent}
            className="w-30 h-50 text-black"
          />
        </div>

        <div className="">
          <label className="pr-2 text-gray-700 text-sm font-bold mb-2">
            Choose File:
          </label>
          <input type="file" accept="image/*" />
        </div>
        <button
          type="submit"
          className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReplyForm;
