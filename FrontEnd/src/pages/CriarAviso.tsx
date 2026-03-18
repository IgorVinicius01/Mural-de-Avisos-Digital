import React from "react";
import { Calendar } from "../components/ui/calendar";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export function CriarAviso() {

    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <div
            className="max-w-6xl mx-auto p-6"
        >
            <header
                className="
                    flex w-full 
                    justify-center
                    text-3xl font-medium
                    text-blue-500"
            >
                <h2>Criar Novo Aviso</h2>
            </header>

            <form 
                className="
                    flex flex-col gap-4 
                    mt-10
                    w-full items-center"
            >
                <div className="flex flex-col w-full">
                    <label className="text-lg text-blue-600">
                        Titulo
                    </label>
                    <Input 
                        id="titulo" 
                        className="h-10 text-gray-600"
                        placeholder="Digite o titulo..."
                    />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label className="text-lg text-blue-600">
                        Descrição
                    </label>
                    <Textarea 
                        id="descicao"
                        className="resize-none"
                        placeholder="Descrição..."    
                    />
                </div>

                <div className="flex flex-col w-full gap-1">
                    <label className="text-lg text-blue-600">
                        Categoria
                    </label>
                    <Input 
                        id="titulo" 
                        className="h-10 text-gray-600"
                        placeholder="Digite a categoria..."
                    />
                </div>

                <div className="flex flex-col w-full gap-3 items-center">
                    <label className="text-lg text-blue-600">
                        Selecione a data do evento:
                    </label>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg border"
                        captionLayout="dropdown"
                    />
                </div>

                <div className="
                        flex w-full justify-center 
                        mt-8"
                >
                    <Button
                        className="
                            w-full h-10 
                            text-lg font-medium
                            cursor-pointer
                            bg-blue-600
                            md:w-80"
                    >
                        Criar aviso
                    </Button>
                </div>
            </form>
        </div>
    )
}