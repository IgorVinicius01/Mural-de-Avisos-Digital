import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header
            className="
                flex w-full h-25
                justify-between
                items-center
                px-4
                bg-blue-400
                sm:px-10"
        >
            <h1
                className="
                text-3xl
                font-bold
                text-white
                sm:text-5xl"  
            >
                Mural de Avisos
            </h1>

            <Sheet>
                <SheetTrigger asChild>
                <Button className="p-3 cursor-pointer sm:p-5"> 
                    <MenuIcon size={24}/> 
                </Button>
                </SheetTrigger>

                <SheetContent side="top">
                    <SheetHeader>
                        <SheetTitle>Navegação do Mural</SheetTitle>
                        <SheetDescription>Selecione uma das opções abaixo</SheetDescription>
                    </SheetHeader>

                    <nav 
                        className="
                            flex flex-col 
                            gap-1
                            px-4
                            mb-4">
                        <Link
                            to="/"
                            className="
                                pl-2
                                py-1
                                text-lg
                                hover:bg-blue-200 rounded-sm
                                sm:text-2xl"
                        >
                            Home
                        </Link>  

                        <Link
                            to="/criarAviso"
                            className="
                                pl-2
                                py-1
                                text-lg
                                hover:bg-blue-200 rounded-sm
                                sm:text-2xl"
                        >
                            Criar novo aviso
                        </Link>

                        <Link
                            to="/"
                            className="
                                pl-2
                                py-1
                                text-lg
                                hover:bg-blue-200 rounded-sm
                                sm:text-2xl"
                        >
                            Meu perfil
                        </Link>  
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Header;