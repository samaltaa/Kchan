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
        <a href="/">/a/</a>
        <a href="/board1">/v/</a>
        <a href="/board2">/mu/</a>
        <a href="/tv/">/tv/</a>
        <a href="/g/">/g/</a>
        <a href="/b/">/b/</a>
        <a href="/pol/">/pol/</a>
        <a href="/w/">/w/</a>
        <a href="/h/">/h/</a>
        <a href="/r/">/r/</a>
        <a href="/x/">/x/</a>
        <a href="/fit/">/fit/</a>
        <a href="/c/">/c/</a>
        <a href="/o/">/o/</a>
        <a href="/vg/">/vg/</a>
        <a href="/k/">/k/</a>
      </nav>
    </div>
  </div>
</header>

  )
}

export default Header