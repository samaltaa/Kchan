import React from 'react'

//TODO: 1. define types 2. give header a basic style 3. add all boards at the bottom of header

function Header() {
  return (
    <header className="bg-blue-500 py-4">
  <div className="container mx-auto flex flex-col items-center justify-center">
    <div className="flex items-center mb-4">
      <img
        src="" // Replace with the path to your logo image
        alt="Logo"
        className="h-12 w-12 mr-2"
      />
      <h1 className="text-white text-xl font-bold">KKchan</h1>
    </div>
    <div>
      <nav className="space-x-4">
        <a href="/">/kkhistory/</a>
        <a href="/board1">/kkhelp/</a>
        <a href="/board2">/kkgym/</a>
        {/* TODO: Add more board links as needed */}
      </nav>
    </div>
  </div>
</header>

  )
}

export default Header