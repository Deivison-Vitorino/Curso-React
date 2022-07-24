import react from "react";
import "./style.css"

export default function Login() {

    return(
        <div className="form">
            <h1>Login</h1>
            <form>
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