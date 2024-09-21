import { List } from "../../features/List";
import { useContacts } from "../../hooks/useContacts";
import { MySpinner } from "../../components/mySpinner";
import { MyAlert } from "../../components/myAlert";
import './home.css';
import Search from "../../features/Search";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function HomeContent() {
  const [contacts, loading, error,fetchContacts] = useContacts();

 
  // Fonction pour rafraîchir les contacts
  function handleRefresh() {
    fetchContacts(); // Récupère les contacts à nouveau via l'API
  }

  const navigate = useNavigate(); // Initialiser useNavigate

  function handleAddClick() {
    navigate("add"); // Naviguer vers la route "add"
  }

  

  // Au chargement
  if (loading) return (
    <div className="spinner-container">
      <MySpinner className="" />
    </div>
  );

  // En cas d'erreur
  if (error) return (
    <MyAlert header="Une erreur est survenue" message="Echec de la récupération de contacts." type="danger" dismissible={true} />
  );

  // Pas de contact
  if (contacts.length === 0) return (
    <MyAlert header="Information" message="Pas de contacts enregistrés." type="info" />
  );

  // Sinon
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div> <Search /> </div>
        <div className="">
          <Button variant="outline-warning" onClick={handleRefresh}>ACTUALISER</Button>
          &nbsp;
          <Button variant="outline-danger" onClick={handleAddClick}>AJOUTER</Button>
        </div>
      </div>
      <List contacts={contacts} />
    </div>
  );
}


function Home(){
  return (
    <>
      <h3 className="text-center p-2 bg-danger text-white rounded-1">Contact Manager App</h3>
      <HomeContent></HomeContent>
    </>
  )
}

export default Home;