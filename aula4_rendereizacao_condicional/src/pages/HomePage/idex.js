import react, { useState } from "react";
import Card from "../../components/Card";
import { Footer } from "../../components/Footer/Index";
import Header from "../../components/Header";
import Cadastro from "../Form/cadastro";
import Login from "../Form/login";

export default function Home() {

    const [acesso, setAcesso] = useState(null);

    return(
        <div>
            
            <Header logo="https://github.com/Deivison-Vitorino/Projeto-Front-End-Soitech/blob/master/images/images/logotipo.png?raw=true" />
            <button onClick={() => setAcesso(!acesso ? <Login /> : null)}>Login</button>
            {acesso}

            <button onClick={() => setAcesso(!acesso ? <Cadastro/> : null)}>Cadastro</button>
            {!acesso}
            <Card logo="https://raw.githubusercontent.com/Deivison-Vitorino/Projeto-Front-End-Soitech/master/images/images/logo.front.jpg" />
            <Footer/>
        </div>
    );
}