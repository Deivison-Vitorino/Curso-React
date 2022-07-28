import react, { useState } from "react";
import {FormContain} from './style'

export default function Login() {

    const [nome, setNome] = useState("");


    return(
        <FormContain>
            <h1>Login</h1>
            <form>
                Seu e-mail é:
                <br></br>
                {nome}
                <br></br>
                <input 
                    onChange={(e) => setNome(e.target.value)}
                    type="email" name="email"  placeholder="e-mail"/>
                    <br></br>
                    


                <br></br>
                <input 
                    type="password" name="senha"  placeholder="Senha">
                </input>

                <br></br>
                <button type="submit">Enviar</button>
            </form>
        </FormContain>
    );
}