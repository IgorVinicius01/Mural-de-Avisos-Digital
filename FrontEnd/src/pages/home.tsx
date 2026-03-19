import { useState } from "react";
import { CardAviso } from "../components/CardAviso";
import Header from "../components/Header";

function Home() {

    const [cardsAvisos] = useState([
        {
            id: 1,
            titulo: "Jogo de futebol",
            descricao: "Jogo entre Flamengo x Palmeiras pelo brasileirão",
            categoria: "Evento",
            data: "20/03/2026",
        },
        {
            id: 2,
            titulo: "Exposição de Artes 2026",
            descricao: "Preparem suas telas! A nossa exposição anual acontecerá no pátio central...",
            categoria: "Evento",
            data: "24/03/2026",
        }
    ]);

  return (
    <div className="min-h-screen">
        <Header/>

        <div 
            className="
                max-w-6xl mx-auto p-6"
        >
            <div>
                <input 
                    type="text" 
                    placeholder="Buscar avisos..."
                    className="
                        w-full 
                        p-2
                        border-2 rounded-sm"
                />
            </div>

            <div 
                className="
                    flex gap-3
                    my-6
                    justify-center
                    items-center"
            >
                <span 
                    className="
                        bg-blue-100 text-blue-600 
                        px-3 py-0.5 rounded-2xl 
                        cursor-pointer
                        font-medium
                        hover:bg-blue-200"
                >
                    Todos
                </span>
                <span
                    className="
                    bg-gray-200 text-gray-700
                    px-3 py-0.5 rounded-2xl
                    cursor-pointer
                    font-medium
                    hover:bg-red-200 hover:text-red-500"
                >
                    Urgentes
                </span>
            </div>

            <div 
                className="
                    grid grid-cols-1
                    gap-6
                    sm:grid-cols-2"
            >
                {cardsAvisos.map((aviso) => (
                    <CardAviso
                        key={aviso.id}
                        {...aviso}
                    />
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Home;