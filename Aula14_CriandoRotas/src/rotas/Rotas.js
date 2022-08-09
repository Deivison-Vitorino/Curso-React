import { Routes, Route } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage";
import UpDatePage from "../pages/UpDatePage";

export default function Rotas(){
    return(
        <Routes>
            <Route exact path={"/"} element={<HomePage/>} />
            <Route exact path={"/create"} element={<CreatePage/>} />
            <Route exact path={"/update"} element={<UpDatePage/>} />
            <Route exact path={"/details/:gid"} element={<DetailsPage/>}/>
        </Routes>
    );
}