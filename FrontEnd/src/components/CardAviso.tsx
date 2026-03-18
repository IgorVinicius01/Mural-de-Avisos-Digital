import { Link } from "react-router-dom";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface AvisoCardProps {
    id: number;
    titulo: string;
    descricao: string;
    categoria: string;
    data: string;
}

export function CardAviso({ id, titulo, descricao, categoria, data} : AvisoCardProps) {
    return (
        <Card>
            <CardHeader>
                <div className="
                    flex justify-between mb-1
                    text-sm"
                >
                    <span 
                        className="text-blue-500 font-medium"
                    >
                        {categoria}
                    </span>
                    <span 
                        className="text-gray-500"
                    >
                        {data}
                    </span>
                </div>

                <CardTitle 
                    className="font-bold text-lg"
                >
                    {titulo}
                </CardTitle>

                <CardDescription>
                    {descricao}
                </CardDescription>
            </CardHeader>

            <CardFooter className="text-blue-400 font-medium">
                <Link to={`/aviso/${id}`}>Saiba mais...</Link>
            </CardFooter>
        </Card>
    )
}