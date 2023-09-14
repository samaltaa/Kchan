import React from 'react'

function BoardList() {
  return (
    <div className='container mx-auto px-4 py-2'>
         <div>
            <h1 className='text-xl  px-4 font-bold bg-blue-300'>Boards</h1>
        </div>
        <div className='flex flex-col border justify-center px-4 py-4 space-y-4 md:flex-row md:space-y-0'>
                
                <div className='pr-4'>
                    <h2>Hobbies</h2>
                    <ul>
                        <li>/a/ - Anime & Manga</li>
                        <li>/v/ - Video Juegos</li>
                        <li>/t/ - Torrents</li>
                        <li>/o/ - Auto</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2>Cultura</h2>
                    <ul>
                        <li>/tv/ - Television & Film</li>
                        <li>/mu/ - Musica</li>
                        <li>/lit/ - Literatura</li>
                        <li>/his/ - Historoa & Humanidadess</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2>Creatividad</h2>
                    <ul>
                        <li>/w/ - Wallpapers</li>
                        <li>/ic/ - Art/Dibujos/Criticismo</li>
                        <li>/po/ - Papercraft & Origami</li>
                        <li>/wg/ - Wallpapers/General</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2>Technologia</h2>
                    <ul>
                        <li>/wa/ - Armas</li>
                        <li>/diy/ - Do It Yourself</li>
                        <li>/sci/ - Ciencia & Matematicas</li>
                        <li>/g/ - Tecnologia</li>
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