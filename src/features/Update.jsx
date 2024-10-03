import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ContactForm from '../components/contactForm';
import Title from '../components/title';
import {  updateExistingContact } from '../services/contactService';
import { useState } from 'react';
import DismissibleToast from '../components/toast';
function Update(){
  const [error, setError] = useState(null);
  // Utilisation de useParams pour récupérer l'id de l'URL
  const { id } = useParams();

  const location = useLocation(); // Récupère l'objet contact depuis l'état

  const { contact } = location.state || {}; // Si l'état est défini, récupère le contact



  //Récupération du
  const navigate = useNavigate();  // Utilise useNavigate pour la redirection
   const handleSubmit= async (values) => {
    try {
      const data = await updateExistingContact(values,id);
      if (data) {
        // Redirige vers la page d'accueil avec un message de succès
        navigate("/", { state: { message: "Contact edité avec succès !" } });
      }
    } catch (error) {
      setError(error)
    }
  }

    return (
      <>
        { error != null ?? <DismissibleToast bg='danger' message={`Erreur lors de la sauvegarde du contact: ${error}`} /> }  
        <div className="mx-auto col-lg-6 col-sm-12 mt-lg-5 mt-xs-1 mt-sm-1 col-xs-12">
        <Title title ="Edition d'un contact" />
        <ContactForm onSubmit={handleSubmit} contact={contact} />
      </div>
      </>
    )
}

export default Update;