import axios from "axios";
import { useCallback, useState } from "react";
import useGetData from "../../hooks/useGetData";
import useInput from "../../hooks/useInput";
import { auth, URL_BASE } from "../../service/api";
import { ListaContain, ListaWrapper, MainContain } from "./style";
import {NavLink} from "react-router-dom"

export default function CreatePage() {
  const tagsList = useGetData("tags", []);
  const [nomeTag, setNomeTag] = useInput("");

  const createNewTag = async () => {
    try {
      await axios.post(
        `${URL_BASE}/tags`,
        {
          data: {
            color: "light-green",
            followers: [],
            name: `${nomeTag}`,
            notes: "Mittens really likes the stuff from Humboldt.",
            workspace: "1202626480538766",
          },
        },
        auth
      );
      window.location.reload(true);
      setNomeTag("");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTag = useCallback((elemento) => {
    axios
      .delete(`${URL_BASE}/tags/${elemento}`, auth)
      .then(() => {
        window.location.reload(true);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    
    <MainContain>
      <NavLink to={"/"}>Home</NavLink>
      <ListaContain>
        Nome da Nova TAG
        <input value={nomeTag} onChange={setNomeTag} />
      </ListaContain>
      <button onClick={createNewTag}> Criar</button>
      <ListaContain>
        Lista de tags:
        <hr />
        {tagsList &&
          tagsList.map((item) => {
            return (
              <ListaWrapper>
                <NavLink to={`/details/${item.gid}`}>{item.name}</NavLink>
                <button onClick={() => deleteTag(item.gid)}>x</button>
              </ListaWrapper>
            );
          })}
      </ListaContain>
    </MainContain>
  );
}
