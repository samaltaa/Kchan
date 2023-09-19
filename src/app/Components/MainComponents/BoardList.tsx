import React from 'react'

function BoardList() {
    /*TODO:
    Backend (Server-Side):

        1. Boards Collection in MongoDB:

        Create a MongoDB collection to store board information, 
        including a unique two-letter board ID generated based 
        on the board's name.

        2. Generate Unique Board IDs:

        When a new board is created, use server-side logic to generate a unique 
        two-letter board ID based on the board's name. 
        Ensure that the generated ID is unique across all boards.

        3. Store Board Documents:

        Store the board documents in the MongoDB collection, 
        including the generated unique board IDs.

        4. Threads Collection in MongoDB:

        Create a MongoDB collection to store thread information, 
        including references to the associated 
        board (using the unique board ID).

        5. Generate Thread IDs:

        When a user posts a new thread, generate a unique t
        hread ID (could be ObjectId) as you currently do.
        Associate Threads with Boards:
        Store the thread documents in the MongoDB collection, including a 
        reference to the associated board's unique ID.

    Frontend (Client-Side):

        1. Board List:
        Display the list of 
        boards with their names.

        2. Board Click Handling:

        When a user clicks on a board, send a request to the 
        server to fetch threads associated with that board 
        based on the unique board ID.

        3. Create Threads:

        When a user creates a new thread on a specific 
        board, send the thread data 
        along with the associated board's 
        unique ID to the server.
    
    */
  return (
    <div className='container  text-yellow-400 mx-auto px-4 py-2'>
         <div>
            <h1 className='text-xl  px-4 font-bold bg-blue-500'>Boards</h1>
        </div>
        <div className='flex flex-col text-yellow-400 border justify-center px-4 py-4 space-y-4 md:flex-row md:space-y-0'>
                
                <div className='pr-4'>
                    <h2 className='font-bold'>Hobbies</h2>
                    <ul>
                        <li>/a/ - Anime & Manga</li>
                        <li>/v/ - Video Juegos</li>
                        <li>/t/ - Torrents</li>
                        <li>/o/ - Autos</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2 className='font-bold'>Cultura</h2>
                    <ul>
                        <li>/tv/ - Television & Film</li>
                        <li>/mu/ - Musica</li>
                        <li>/lit/ - Literatura</li>
                        <li>/his/ - Historia & Humanidades</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2 className='font-bold'>Creatividad</h2>
                    <ul>
                        <li>/w/ - Wallpapers</li>
                        <li>/ic/ - Art/Dibujos/Criticismo</li>
                        <li>/po/ - Papercraft & Origami</li>
                        <li>/wg/ - Wallpapers/General</li>
                    </ul>
                </div>
                <div className='pr-4 '>
                    <h2 className='font-bold'>Technologia</h2>
                    <ul>
                        <li>/wa/ - Armas</li>
                        <li>/diy/ - Do It Yourself</li>
                        <li>/sci/ - Ciencia & Matematicas</li>
                        <li>/g/ - Tecnologia</li>
                    </ul>
                </div>
                <div className='pr-4'>
                    <h2 className='font-bold'>18+</h2>
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