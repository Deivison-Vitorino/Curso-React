import react from "react";
import "./style.css"

export default function Cadastro() {

    return(
        <div className="form">
            <h1>Cadastro</h1>
            <form>
                <br></br>
                <input type="nome" name="nome" id="nome" placeholder="Nome"></input>
                <br></br>
                <input type="email" name="email" id="email" placeholder="e-mail"></input>
                <br></br>
                <input type="password" name="senha" id="senha" placeholder="Senha"></input>
                <br></br>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}