import React from 'react'

function BoardList() {
  return (
    <div className='container mx-auto px-4 py-2'>
        <h1 className='text-xl'>Boards</h1>
        <div className='flex flex-col border justify-center px-4 py-4 space-y-4 md:flex-row md:space-y-0'>
                
                <div className='pr-4'>
                    <h2>Hobbies</h2>
                    <ul>
                        <li>/a/ - Anime & Manga</li>
                        <li>/v/ - Video Games</li>
                        <li>/t/ - Torrents</li>
                        <li>/o/ - Auto</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2>Culture</h2>
                    <ul>
                        <li>/tv/ - Television & Film</li>
                        <li>/mu/ - Music</li>
                        <li>/lit/ - Literature</li>
                        <li>/his/ - History & Humanities</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2>Creative</h2>
                    <ul>
                        <li>/w/ - Wallpapers</li>
                        <li>/ic/ - Artwork/Critique</li>
                        <li>/po/ - Papercraft & Origami</li>
                        <li>/wg/ - Wallpapers/General</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2>Other</h2>
                    <ul>
                        <li>/an/ - Animals & Nature</li>
                        <li>/diy/ - Do It Yourself</li>
                        <li>/sci/ - Science & Math</li>
                        <li>/g/ - Technology</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2>18+</h2>
                    <ul>
                        <li>/h/ - Hentai</li>
                        <li>/e/ - Ecchi</li>
                        <li>/d/ - Hentai/Alternative</li>
                        <li>/s/ - Sexy Beautiful Women</li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default BoardList