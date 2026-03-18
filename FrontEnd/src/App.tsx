import { MenuIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet"

function App() {

  return (
   <div>
    <header
      className="
        flex w-full h-25
        justify-between
        items-center
        px-4
        bg-blue-400"
    >
      <h1
        className="
          text-3xl
          font-bold
          text-white"  
      >
        Mural
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="p-3 cursor-pointer"> 
            <MenuIcon size={24}/> 
          </Button>
        </SheetTrigger>

        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Navegação do Mural</SheetTitle>
            <SheetDescription>Selecione uma das opções abaixo</SheetDescription>
          </SheetHeader>
        </SheetContent>

      </Sheet>
    </header>
   </div>
      
  )
}

export default App;
