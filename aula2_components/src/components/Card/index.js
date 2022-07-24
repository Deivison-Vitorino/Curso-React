//Contruir um card que recebe imagem , titulo e ação
import react from "react";

export default function Card (props) {

    return(
        <div>
            
            <img src={props.logo} alt="logo Card"/>
            
        </div>
    );
}