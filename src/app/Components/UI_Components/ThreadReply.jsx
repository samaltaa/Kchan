import React, {useEffect, useState} from 'react'

function ThreadReply() {
    const [replies, setReplies] = useState([]);
    const [isImageClicked, setIsImageClicked] = useState(false);


    useEffect(() => {
        //simulated replies data
    const replies = [
        {
          id: 1,
          content: "daiblo utede si hablan mielda en ete tablon",
          creator: "u/anonimo239845",
          timestamp: "hace 1 hora(s)",
          image: "https://i.imgur.com/Th49z9S.png "
        },
        {
          id: 2,
          content: "Dios bendiga la raza quisqueyana y rejuvenezca su gloria",
          creator: "u/anonimo126598",
          timestamp: "hace 2 hora(s)",
        },
        {
          id: 3,
          content: "oye ahora",
          creator: "u/anonimo864702",
          timestamp: "hace 2 hora(s)",
          image: "https://pm1.aminoapps.com/6253/53df2593e81459bd38da794430c6ffa8cdfb6f64_hq.jpg "
        },
        {
          id: 4,
          content: "si el jefe tuviera vivo tu no tuviera hablando mielda",
          creator: "u/anonimo753912",
          timestamp: "hace 2 hora(s)",
        },
        {
          id: 5,
          content: "En la actualidad, la situación política en la República Dominicana ha despertado preocupación en Gualey y en todo el país. Muchos argumentan que el gobierno actual muestra signos de trujillismo, recordando una época oscura de represión y autoritarismo en nuestra historia. La falta de transparencia y el control gubernamental sobre los medios de comunicación han generado inquietud entre la población. En Gualey y en toda la nación, es importante que los ciudadanos se mantengan alerta y comprometidos con la defensa de la democracia y los derechos humanos para evitar un retorno a tiempos pasados que no deseamos repetir.",
          creator: "u/anonimo982146",
          timestamp: "hace 2 hora(s)",
          image: "https://preview.redd.it/drlp5amo8et81.png?auto=webp&s=202f4e03e2c718432d7e3c3025fec44f6f52587b"
        },
        {
          id: 6,
          content: "y ya dique por deci eso tu ere duro rptm",
          creator: "u/anonimo697204",
          timestamp: "hace 2 hora(s)",
        },
      ];
      setReplies(replies)
    }, [])
  return (

    <div>
        {replies.map((reply) => (
        <div
            key={replies.id}
            className="border bg-blue-500 text-white p-2 mb-2"
            style={{
                width: '100%', // Adjust the width as needed
                height: 'auto', // Adjust the height as needed
            }}
    >
      <div className="flex">
        <p className="text-gray-600 px-2">
          <span className="text-yellow-300 font-bold">~ {reply.creator}</span> • {reply.timestamp} • hilo: #88123
        </p>
      </div>
      <div>
        <img
            src={reply.image}
            className="w-12 h-13" // Adjust the dimensions as needed
        />
      </div> 
      <p className="text-white mt-2">{reply.content}</p>
    </div>
        
      ))}
    </div>
  )
}

export default ThreadReply