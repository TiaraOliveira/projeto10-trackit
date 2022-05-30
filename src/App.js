import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/TelaLogin"
import TelaCadastro from "./components/TelaCadastro.js"
import Hoje from "./components/Hoje";
import TelaHabitos from "./components/Telahabitos";
import UserContext from "./components/contexts/UserContext";
import { useState } from "react";
import Historico from "./components/Historico";
import PercentageContext from "./components/contexts/PercentageContext";
import './components/reset.css'
import GlobalStyle from "./components/contexts/globalStyles";

export default function App(){
   
    const [dados, setDados] = useState([]);
    const [percentage, setPercentage] = useState([])
   
   
   
    return(
        <UserContext.Provider value={{dados, setDados}}>
             <PercentageContext.Provider value={{percentage, setPercentage}}>
            <BrowserRouter>
        {/* Tudo que tiver uma rota entre Routes */}
                <Routes>
                    {/* Cada rota tem que estar em Route */}
                  
                    <Route path="/" element={<PaginaPrincipal />} />
                    <Route path="/Cadastro" element={<TelaCadastro />}/>
                    <Route path="/Habitos" element={<TelaHabitos />}/>
                    <Route path="/Hoje" element={<Hoje />} />
                    <Route path="/Historico" element={<Historico />} />
                   
                </Routes>
                <GlobalStyle />
            </BrowserRouter>
            </PercentageContext.Provider>
        </UserContext.Provider>
        
    )

}
