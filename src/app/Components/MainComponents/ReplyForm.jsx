'usec client'
import React, {useState, useEffect} from 'react'

const ReplyForm = ()=> {
    //TODO: (Redux) create a store for this as well as slices with the actions
    const [name, setName] = useState('Anonymous');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    //TODO: add this to ./Utils/helpers
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

    const handleReplySubmit = () =>{
        //TODO: handle reply submission logic
    }
  return (
    <div className=' w-1/2'>
        <form className='bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
                <label className='pr-2 text-gray-700 text-sm font-bold mb-2'>Name:</label>
                <input
                    type='text'
                    value={name}
                    onChange={handleName}
                    className='w-50'
                />
            </div>

            <div className='mb-4'>
                <label className='pr-2 text-gray-700 text-sm font-bold mb-2'>Subject:</label>
                <input
                type="text"
                value={subject}
                onChange={handleSubject}
                className="w-50"
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
        </form>

    </div>
  )
}

export default ReplyForm
