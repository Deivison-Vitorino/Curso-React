import react from "react";
import Card from "../../components/Card";
import { Footer } from "../../components/Footer/Index";
import Header from "../../components/Header";

export default function Home() {
    return(
        <div>
            
            <Header logo="https://github.com/Deivison-Vitorino/Projeto-Front-End-Soitech/blob/master/images/images/logotipo.png?raw=true" />
            <button>Login</button>
            <button>Cadastro</button>
            <Card logo="https://raw.githubusercontent.com/Deivison-Vitorino/Projeto-Front-End-Soitech/master/images/images/logo.front.jpg" />
            <Footer/>
        </div>
    );
}