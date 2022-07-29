import React, { useState } from "react";
import { DATA_POST } from "./DATA_POST";
import { ButtonReset, CardPostContain, WrapperCard } from "./style";

export default function CardPost() {
  const [post, setPost] = useState(DATA_POST);

  //use o console para ver a estrutura do array post
  console.log(post);

  const usaId = post.filter((item) => item.id === "5");
  const usaPhoto = post.filter((item) => item.photo === "http://4.bp.blogspot.com/-ip8cbE5P7tk/VG5k4L-Jj-I/AAAAAAAACwU/dDG33T29Utg/s1600/Praia.jpg");
  const usaTitulo = post.filter((item) => item.titulo === "Fotografias")

  //crie abaixo o map
  const lePosts = post.map((item) => {
    return (
      <WrapperCard>
        <p>id:{item.id}</p>
        <img src={item.photo} alt="perfil" />
        <h1>{item.titulo}</h1>
      </WrapperCard>
    );
  });

  return (
    <CardPostContain>
      <div>
        Escolha qual post quer ver
        <button className="button-15" onClick={() => setPost(usaId)}>
          Por id
        </button>
        <button className="button-15" onClick={() => setPost(usaPhoto)}>
          Por foto
        </button>
        <button className="button-15" onClick={() => setPost(usaTitulo)}>
          Por titulo
        </button>
      </div>
      <ButtonReset onClick={() => setPost(DATA_POST)}>RESET</ButtonReset>

      {lePosts}
    </CardPostContain>
  );
}
