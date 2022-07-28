import styled from "styled-components";

export const HomeContain = styled.div`

  text-align: center;

`

export const ButonContain = styled.button`
 
background-color: ${(props) => props.active ? '#050761' : "white"};
color: ${(props) => props.active ? 'white' : ""};
border: none;
cursor: pointer;
margin: 1%;


&:hover{
  transform: scale(1.1);
  background-color: #2505d8;
  color: white;
}

`