import react, { useState } from "react";
import {FormContain} from './style'

export default function Cadastro() {

    const [nome, setNome] = useState("");

    const [email, setEmail] = useState("");

    return(
        <FormContain>
            <h1>Cadastro</h1>
            <form>
                
                <br></br>
                <input onChange={(e) => setNome(e.target.value)} type="nome" name="nome"  placeholder="Nome"/>
                <h6>Seu nome é:</h6>
                {nome}
                <br></br>
                
                <br></br>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="e-mail"/>
                <h6>Seu e-mail é:</h6>
                {email}
                <br></br>

                <input type="password" name="senha" placeholder="Senha"/>
                <br></br>

                <input type="checkbox" name="Lembrar" ></input>
                <h6>Lembrar</h6>
                <button type="submit">Enviar</button>
            </form>
        </FormContain>
    );
}