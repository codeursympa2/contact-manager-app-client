import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/contactForm';
import Title from '../components/title';
import { createNewContact } from '../services/contactService';
import { useState } from 'react';
import DismissibleToast from '../components/toast';
function Add(){
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Utilise useNavigate pour la redirection
  async function handleSubmit(values){
    try {
      const data = await createNewContact(values);
  
      if (data) {
        // Redirige vers la page d'accueil avec un message de succès
        navigate("/", { state: { message: "Contact sauvegardé avec succès !" } });
      }
    } catch (error) {
      setError(error)
    }
  }

    return (
      <>
        { error != null ?? <DismissibleToast bg='danger' message={`Erreur lors de la sauvegarde du contact: ${error}`} /> }  
        <div className="mx-auto col-lg-6 col-sm-12 mt-lg-5 mt-xs-1 mt-sm-1 col-xs-12">
        <Title title ="Ajout d'un contact" />
        <ContactForm onSubmit={handleSubmit}/>
      </div>
      </>
    )
}

export default Add;