import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"
import Categoria from "./Categoria"


function Sidebar() {

  const {categorias} = useQuiosco()
  return (
    <>
          <Image width={300} height={100}  src="/assets/img/logo.svg" alt="imagen logotipo"/>
      
        <nav className="mt-10">
          {categorias.map(categoria=>(
            <Categoria
              categoria={categoria}
              key={categoria.id}
            
            />
          ))}
        

        </nav>
    </>
  )
}

export default Sidebar