//Contruir um card que recebe imagem , titulo e ação
import react from "react";
import {CardContain, ImgContain} from './style'

export default function Card (props) {

    return(
        <CardContain>
            
            <ImgContain src={props.logo} alt="logo Card"/>
            
        </CardContain>
    );
}