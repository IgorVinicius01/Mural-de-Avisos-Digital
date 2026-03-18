import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

function Home() {
  return (
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
            <Card>
                <CardHeader>
                    <div className="
                        flex justify-between mb-1
                        text-sm"
                    >
                        <p>EVENTO</p>
                        <p>18 Mar</p>
                    </div>
                    <CardTitle 
                        className="font-bold text-lg"
                    >
                        Exposição de Artes 2026
                    </CardTitle>
                    <CardDescription>
                        Preparem suas telas! A nossa
                        exposição anual acontecerá no 
                        pátio central...
                    </CardDescription>
                </CardHeader>
                <CardFooter className="text-blue-400 font-medium">
                    <a href="/">Saiba mais...</a>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <div className="
                        flex justify-between mb-1
                        text-sm"
                    >
                        <p>EVENTO</p>
                        <p>18 Mar</p>
                    </div>
                    <CardTitle 
                        className="font-bold text-lg"
                    >
                        Exposição de Artes 2026
                    </CardTitle>
                    <CardDescription>
                        Preparem suas telas! A nossa
                        exposição anual acontecerá no 
                        pátio central...
                    </CardDescription>
                </CardHeader>
                <CardFooter className="text-blue-400 font-medium">
                    <a href="/">Saiba mais...</a>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}

export default Home;