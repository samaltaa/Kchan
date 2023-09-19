'use client'
import React, {useState} from 'react'

const CreateThread = ()=> {
    const [name, setName] = useState('anonimo');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubject = (e) =>{
        setSubject(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleFiles = (e) =>{
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleThreadSubmit = () =>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('subject', subject);
        formData.append('message', message);
        formData.append('file', selectedFile);

        fetch('http://localhost:3001/threads', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  return (
    <div className=' w-1/2'>
        <form className='bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
                <label className='pr-2 text-gray-500 text-sm font-bold mb-2'>Name:</label>
                <input
                    type='text'
                    value={name}
                    onChange={handleName}
                    className='w-50 text-black'
                />
            </div>

            <div className='mb-4'>
                <label className='pr-2 text-gray-700 text-sm font-bold mb-2'>Subject:</label>
                <input
                type="text"
                value={subject}
                onChange={handleSubject}
                className="w-50 text-black"
                />
            </div>

            <div className='mb-2 flex items-center'>
                <label className='pr-2 text-gray-700 text-sm font-bold mb-2'>Message:</label>
                <textarea
                value={message}
                onChange={handleMessage}
                className="w-30 h-50 text-black"
                />
            </div>

            <div className=''>
                <label className='pr-2 text-gray-700 text-sm font-bold mb-2'>Choose File:</label>
                <input
                type="file"
                accept="image/*"
                onChange={handleFiles}
                />
            </div>
            <button onClick={handleThreadSubmit} className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded'>
                Submit
            </button>
        </form>

    </div>
  )
}

export default CreateThread