import { useLocation, useParams } from "react-router-dom";
import Update from "../features/Update";

function UpdatePage(){

     // Utilisation de useParams pour récupérer l'id de l'URL
    const { id } = useParams();

    const location = useLocation(); // Récupère l'objet contact depuis l'état

    const { contact } = location.state || {}; // Si l'état est défini, récupère le contact

    return (
        <Update id={id} contact={contact}></Update>
    )
}

export default UpdatePage;