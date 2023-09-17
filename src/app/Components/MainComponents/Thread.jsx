"use client";
import React, { useEffect, useState } from "react";
import Button from "../UI_Components/PostButton";
import ThreadReply from "../UI_Components/ThreadReply";

function Thread() {
  const [threadData, setThreadData] = useState([]);

  //simulated data for thread TODO: replace with data fetching logic
  useEffect(() => {
    //simulated thread data
    const threadData = [
      {
        id: 1,
        title: "No sabe tu",
        content:
          "Hermano, Trujillo era un bicho malo, Mandaba aquí como si fuera su finca. No podías abrir la boca si no querías meterte en un lío. Y eso de su ego gigante, ¡qué chiquitico! Se llenó los bolsillos con la plata de todos nosotros sin piedad. Esa época de Trujillo fue como una pesadilla, de verdad que da rabia pensar en eso.",
        creator: "u/anonimo753912",
        timestamp: "3 hours ago",
        image:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-515136890.jpg"
      },
      {
        id: 2,
        title: "La Independencia de la República Dominicana",
        content:
          "La independencia de la República Dominicana se logró el 27 de febrero de 1844, cuando Juan Pablo Duarte y un grupo de patriotas proclamaron la independencia del país ante el dominio haitiano. Este evento marcó un hito en la historia dominicana y es celebrado cada año como el Día de la Independencia.",
        creator: "u/anonimo678553",
        timestamp: "hace 1 hora(s)",
        image: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/378759767_1035642180803370_6024940970019229930_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=r1tIlHKNSxMAX9ezlOr&_nc_ht=scontent-lga3-2.xx&oh=00_AfAjOLJtfSnQ0xaYnTNVEjN7CpEXDkuO60LugeKrINx3KQ&oe=650AD376"
      },
      {
        id: 3,
        title: "La Era de Trujillo en la República Dominicana",
        content:
          "La Era de Trujillo en la República Dominicana, que abarcó desde 1930 hasta 1961, fue un período de gobierno autoritario y represión. Rafael Leónidas Trujillo gobernó con mano dura, estableciendo un régimen dictatorial conocido por su brutalidad. Su tiranía llegó a su fin con su asesinato en 1961.",
        creator: "u/anonimo123345",
        timestamp: "hace 1 hora(s)",
        image: ""
      },
      {
        id: 4,
        title: "La Revolución de Abril de 1965",
        content:
          "La Revolución de Abril de 1965 fue un conflicto político y militar que surgió en la República Dominicana. Se originó tras la renuncia del presidente Juan Bosch y el intento de restaurar su gobierno. La intervención de Estados Unidos en este conflicto dejó una profunda huella en la historia del país.",
        creator: "u/anonimo456443",
        timestamp: "hace 1 hora(s)",
        image: ""
      },
      {
        id: 5,
        title: "El Legado de las Hermanas Mirabal",
        content:
          "Las Hermanas Mirabal, también conocidas como Las Mariposas, fueron tres valientes mujeres dominicanas que lucharon contra la dictadura de Trujillo. Patria, Minerva y María Teresa Mirabal se convirtieron en símbolos de la resistencia y la lucha por la libertad en la República Dominicana. Su trágico asesinato en 1960 conmocionó al país y fortaleció la oposición al régimen de Trujillo.",
        creator: "u/anonimo239870",
        timestamp: "hace 1 hora(s)",
        image: ""
      },
    ];
    setThreadData(threadData);
  }, []);

  return (
    <div className="p-4 flex flex-col items-center text-white">
      {threadData.map((thread) => (
        <div key={thread.id} className="w-2/3 bg-blue-400 px-4 mb-4">
          <h1 className="text-2xl font-semibold">{thread.title}</h1>
          <p className="text-gray-600">
            <span className="text-yellow-300 font-bold">{thread.creator}</span> • {thread.timestamp} • thread ID: {thread.id}
          </p>
          <div className="w-2/3 bg-blue-400 px-1 mb-4">
          {thread.image && ( // Render the image if it exists
            <div
              style={{
                width: '12rem', // Set width to maintain the golden ratio (w-12)
                height: '13rem', // Set height to maintain the golden ratio (h-13)
              }}
            >
              <img
                src={thread.image}
                className="w-full h-full object-cover" // Make the image cover the entire container
              />
            </div>
            )}
            <p className="mt-4 mb-4">{thread.content}</p>
            <Button />
            <div className="w-2/3 mt-4">
              {/* TODO: Place replies components here */}
              <ThreadReply />
            </div>
          </div>
        </div>
      ))}
      {/* TODO: Add reply form component */}
    </div>
  );
}

export default Thread;
