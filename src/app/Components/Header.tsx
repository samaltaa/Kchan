import React from 'react'

//TODO: 1. define types 2. give header a basic style 3. add all boards at the bottom of header

function Header() {
  return (
    <header className="bg-blue-500 py-4">
  <div className="container mx-auto flex flex-col items-center justify-center">
    <div className="flex items-center mb-4">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2421eab-141b-4cde-9c6d-1990bc6294fa/d6mdd4s-c3ef397d-3a69-4032-ab56-1e1b39733ee6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyNDIxZWFiLTE0MWItNGNkZS05YzZkLTE5OTBiYzYyOTRmYVwvZDZtZGQ0cy1jM2VmMzk3ZC0zYTY5LTQwMzItYWI1Ni0xZTFiMzk3MzNlZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cULIDtHhoo1oiY0areR5ASvQEtl2PwT8BZLzG1rj3CU" // Replace with the path to your logo image
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
        <a href="/g/">/wa/</a>
        <a href="/b/">/lit/</a>
        <a href="/pol/">/h/</a>
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