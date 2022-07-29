import React, { useState } from "react";

export default function ExerciciosParteDois() {
  var pessoas = [
    { nome: "jullia", sobrenome: "izidorio", idade: 24 },
    { nome: "juliana", sobrenome: "paiva", idade: 24 },
    { nome: "junior", sobrenome: "izidorio", idade: 30 },
    { nome: "joyce", sobrenome: "lima", idade: 22 },
    { nome: "jullia", sobrenome: "lima", idade: 18 },
  ];
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);

  const meuForEach = pessoas.forEach((item) => {
    return (item.nome = "maria");
  });

  const meuFind = pessoas.find((item) => {
    return item.idade === 24;
  });

  const includesInNumeros = numeros.includes(2);

  const meuIncludes = pessoas.filter((item) => item.nome.includes("j"));
  return <div>Manipulação de Arrays - parte 01</div>;
}
