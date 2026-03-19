import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { CircleUserRound, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState } from "react";

export function Login() {

    const [show, setShow] = useState(false);

    return (
        <div
            className="
                flex flex-col 
                min-w-screen min-h-screen 
                justify-center 
                items-center"
        >
            <h1 
                className="
                    mb-15
                    text-3xl text-gray-800
                    font-bold
                    md:mb-25"
            >
                Login
            </h1>

            <form
                className="
                    flex flex-col
                    gap-4 w-full
                    px-16
                    md:max-w-130"
            >
                <div className="relative">
                    <CircleUserRound 
                        className="
                            absolute left-3 top-1/2 
                            -translate-y-1/2 w-4 h-4
                            text-muted-foreground"
                    />
                    
                    <Input
                        className="h-10 pl-9 text-gray-700"
                        placeholder="Usuário"
                        required
                    />
                </div>
                
                <div className="relative">
                    <LockKeyhole
                        className="
                            absolute left-3 top-1/2
                            -translate-y-1/2 w-4 h-4
                            text-muted-foreground"
                    />

                    <Input 
                        className="h-10 pl-9 text-gray-700"
                        placeholder="Senha"
                        type={show ? "text" : "password"}
                        required
                    />

                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="
                            absolute right-3 top-1/2
                            -translate-y-1/2
                            text-muted-foreground
                            hover:text-foreground"
                    >
                        {show ? (
                            <EyeOff className="w-4 h-4" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}
                    </button>
                </div>

                <div 
                    className="
                        flex w-full 
                        justify-between text-sm
                        text-gray-600 px-1"
                >
                    <Link to={"/"}>Cadastrar-se</Link>
                    <Link to={"/"}>Recuperar senha</Link>
                </div>

                <Button
                    className="
                        mt-6
                        h-10 cursor-pointer 
                        text-lg"
                >
                    Login
                </Button>
            </form>
        </div>
    )
}