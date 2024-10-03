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
import { deleteContact, searchContactByParam } from "../../services/contactService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRefresh} from '@fortawesome/free-solid-svg-icons';
import { updateContact } from "../../api/contacts";


function HomeContent() {
  const [contacts, loading, error, fetchContacts] = useContacts();
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [contactsUpdate, setContactsUpdate] = useState([]); // État local pour la liste filtrée
  const [initialData, setInitialData] = useState([]);
 
  useEffect(() => {
    if (contacts) {
      setContactsUpdate(contacts); 
      setInitialData(contacts);
    }
  }, [contacts]);
  
  // Fonction pour rafraîchir les contacts
  const handleRefresh = () => {
    setShowDeleteMessage(false);
    fetchContacts(); // Récupère les contacts à nouveau via l'API
    setInitialData(contacts);
  };

  const navigate = useNavigate(); // Initialiser useNavigate

  function handleAddClick() {
    navigate("add"); // Naviguer vers la route "add"
  }

  function handleDelete(index) {
    deleteContact(index);
    handleRefresh();
    setInitialData(contacts);
    setShowDeleteMessage(true);
  }

  async function handleSearchTextChange(value) {
   if(value.length > 0 && value.trim()){
    let list=await searchContactByParam(value);
    setContactsUpdate(list);
   }else{
    setContactsUpdate(initialData);
   }
  }

  // Au chargement
  if (loading) {
    return (
      <div className="spinner-container">
        <MySpinner className="" />
      </div>
    );
  }

  // En cas d'erreur
  else if (error) {
    return (
      <MyAlert header="Une erreur est survenue" message="Echec de la récupération de contacts." type="danger" dismissible={true} />
    );
  }

  // Pas de contact
  else if (updateContact.length === 0) {
    return (
      <MyAlert header="Information" message="Pas de contacts enregistrés." type="info" />
    );
  } else {
    return (
      <>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <Search onChangeSearchText={handleSearchTextChange} />
            </div>
            <div className="">
              <Button variant="danger" onClick={handleRefresh}>
                <FontAwesomeIcon icon={faRefresh} />
              </Button>
              &nbsp;
              <Button variant="danger" onClick={handleAddClick}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
          </div>
          <List contacts={contactsUpdate} onDelete={handleDelete} />
        </div>
        {showDeleteMessage && (
          <DismissibleToast bg="primary" message="Contact supprimé avec succès." />
        )}
      </>
    );
  }
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