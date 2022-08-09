import {useParams} from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { MainTag } from "./style";
import {NavLink} from "react-router-dom";



export default function DetailsPage(){

    const id = useParams()
    const tagsDetaisl = useGetData(`tags/${id.gid}`, [])
    console.log(tagsDetaisl)

    return(
        <MainTag>
            
            <NavLink to={"/"}>Home</NavLink>
            <h2>Informações da TAG</h2>
            <li>{tagsDetaisl && tagsDetaisl.name}</li>
            <li>{tagsDetaisl && tagsDetaisl.color}</li>
            <li>{tagsDetaisl && tagsDetaisl.notes}</li>
            <li>{tagsDetaisl && tagsDetaisl.created_at}</li>
            
        </MainTag>
    );
}