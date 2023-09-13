import React from 'react'

//TODO: 1. define types 2. give header a basic style 3. add all boards at the bottom of header

function Header() {
  return (
    <header className='bg-blue-500 py-4'>
        <div className='container mx-auto flex items-center justify-between'>
            <div className='flex items-center'>
                <img src='' className='h-12 w-12 mr-2'/>
                <h1 className='text-white text-xl font-bold'>
                    KKchan
                </h1>
                <nav className="space-x-4">
                <a href="/">Home</a>
                <a href="/board1">Board 1</a>
                <a href="/board2">Board 2</a>
                {/* TODO: Add more board links as needed */}
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header