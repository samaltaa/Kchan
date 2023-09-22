import React, { useState } from 'react';
import axios from 'axios';

function ReplyForm() {
  const [creator, setCreator] = useState("anonimo");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  // Function to handle image file selection
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData();
      formData.append("creator", creator);
      formData.append("subject", subject);
      formData.append("content", content);
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post('http://localhost:3001/replies', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set content type for file upload
      },
    });

      // Handle the response from the server, e.g., display a success message.
      console.log('Reply created:', response.data);

      //reset form field
      setSubject("");
      setContent("");
      setImage(null);
      
    } catch (error) {
      console.error('Error:', error);
      // Handle any error that occurred during submission
    }
  };

  return (
    <div className="w-1/2 mt-4">

      <form 
      encType='multipart/form-data'
      className="bg-slate-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 border"
      onSubmit={handleSubmit}>
      <h2 className='mb-6 font-bold'>Crear Respuesta</h2>
        <div className="mb-4">
          <label className="pr-2 text-gray-700 text-sm font-bold mb-2" htmlFor="creator">Nombre:</label>
          <input
            className='text-black w-30 h-50'
            type="text"
            id="creator"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
        </div>

        

        <div className="mb-4">
          <label className="pr-2 text-gray-700 text-sm font-bold mb-2" htmlFor="content">Contenido:</label>
          <textarea
            className='text-black w-30 h-50'
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className="pr-2 text-gray-700 text-sm font-bold mb-2" htmlFor="image">Choose an Image (JPEG/JPG):</label>
          <input
            type="file"
            id="image"
            accept=".jpg, .jpeg"
            onChange={handleImageChange}
          />
        </div>

        <div>
          <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ReplyForm;
