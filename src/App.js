import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/TelaLogin"
import TelaCadastro from "./components/TelaCadastro.js"
import Hoje from "./components/Hoje";
import TelaHabitos from "./components/Telahabitos";



export default function App(){
   

   
    return(
        <BrowserRouter>
        {/* Tudo que tiver uma rota entre Routes */}
       
        <Routes>
            {/* Cada rota tem que estar em Route */}
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/Cadastro" element={<TelaCadastro />}/>
            <Route path="/Habitos" element={<TelaHabitos />}/>
            <Route path="/Hoje" element={<Hoje />} />
        </Routes>
    </BrowserRouter>
    )

}
