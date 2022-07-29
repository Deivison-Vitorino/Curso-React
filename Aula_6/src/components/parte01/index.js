import React, { useState } from "react";
import {CallPerson} from "./style"

export default function ExerciciosParteUm() {
  const [pessoasInicial, setPessoasInicial] = useState([
    { nome: "jullia", sobrenome: "izidorio", idade: 24 },
    { nome: "maria", sobrenome: "jose", idade: 15 },
    { nome: "maria", sobrenome: "aurora", idade: 8 },
    { nome: "juliana", sobrenome: "paiva", idade: 24 },
    { nome: "junior", sobrenome: "izidorio", idade: 30 },
    { nome: "joyce", sobrenome: "lima", idade: 22 },
    { nome: "jullia", sobrenome: "lima", idade: 18 },
  ]);

const [pessoas, setPessoas] = useState(pessoasInicial);


  //EXERCICIO 1
  const meuMap = pessoas.map((item) => {
    return <CallPerson>
      <h4>Nome: {item.nome}</h4>
      <h4>Sobrenome: {item.sobrenome}</h4>
      <h4>idade: {item.idade}</h4>
      
    </CallPerson>
  });

  //EXERCÍCIO 2
  const lista = pessoas.map((item) => {
    return (
      <div>
        <hr></hr>
        <li>
            Nome: {item.nome}
            Sobrenome: {item.sobrenome}
            idade: {item.idade}
            <hr></hr>
        </li>
      </div>
    );
  });

  //exemplo 1

  const meuFilter = pessoas.filter((item) =>item.nome === "maria")
  const maiorQueVinte = pessoas.filter((item) =>item.idade > 20)
  

  //EXERCICIO 3

 // const filterMaiorQueVinte 
 // const filterMaiorQueTrinta 

  return (
    <div>
      <button onClick={() => setPessoas(meuFilter)}>Marias</button>
      <button onClick={() => setPessoas(pessoasInicial)}>Reset</button>
      <button onClick={() => setPessoas(maiorQueVinte)}>+ 20</button>
      {meuMap}
    </div>
  );
}
