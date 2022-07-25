import react, { useState } from "react";
import "./style.css"

export default function Login() {

    const [nome, setNome] = useState("");

    const [senha, setSenha] = useState("");

    return(
        <div className="form">
            <h1>Login</h1>
            <form>
                Seu e-mail é:
                <br></br>
                {nome}
                <br></br>
                <input 
                    onChange={(e) => setNome(e.target.value)}
                    type="email" name="email" id="email" placeholder="e-mail"/>
                    <br></br>
                    


                <br></br>
                <input 
                    onChange={(e) => setSenha(e.target.value)}
                    type="password" name="senha" id="senha" placeholder="Senha">
                </input>

                <br></br>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}