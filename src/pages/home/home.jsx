import { useContacts } from "../../hooks/useContacts";
import { MySpinner } from "../../components/mySpinner";
import { MyAlert } from "../../components/myAlert";
import './home.css';
import Search from "../../features/Search";
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from "react-router-dom";
import DismissibleToast from "../../components/toast";
import Title from "../../components/title";
import List from "../../features/List";
import { deleteContact } from "../../services/contactService";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRefresh} from '@fortawesome/free-solid-svg-icons';

function HomeContent() {
  const [contacts, loading, error,fetchContacts] = useContacts();
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
 
  // Fonction pour rafraîchir les contacts
  function handleRefresh() {
    fetchContacts(); // Récupère les contacts à nouveau via l'API
  }

  const navigate = useNavigate(); // Initialiser useNavigate

  function handleAddClick() {
    navigate("add"); // Naviguer vers la route "add"
  }

  function handleDelete(index){
    deleteContact(index);
    handleRefresh();
    setShowDeleteMessage(true)
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
    <>
        <div>
        <div className="d-flex justify-content-between">
          <div> <Search /> </div>
          <div className="">
            <Button variant="danger" onClick={handleRefresh}><FontAwesomeIcon  icon={faRefresh} /></Button>
            &nbsp;
            <Button variant="danger" onClick={handleAddClick}><FontAwesomeIcon icon={faPlus} /></Button>
          </div>
        </div>
        <List contacts={contacts} onDelete={handleDelete}/>
      </div>
      {
        showDeleteMessage && (
          <DismissibleToast bg="primary" message="Contact supprimé avec succés." />
        )
      }
    </>
  );
}


function Home(){
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <Title title="Liste des contacts"></Title>
      <HomeContent></HomeContent>
      {state && state.message && (
        <DismissibleToast bg="success" message={state.message} />
      )}
      
    </>
  )
}

export default Home;