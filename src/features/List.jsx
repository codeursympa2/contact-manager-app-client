import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, } from '@fortawesome/free-solid-svg-icons';
import Delete from './Delete';
import { useNavigate } from 'react-router-dom';
import { MyAlert } from '../components/myAlert';

function List({contacts,onDelete}){

    const navigate=useNavigate();

    const goToUpdate = (contact) => {
        //On va sur contact avec les données
        navigate(`update/${contact.id}`, { state: { contact } });
    }

    if(contacts.length === 0){
        return (
            <MyAlert header="Information" message="Pas de résultat pour cette recherche." type="warning" />
          );
    }
    return (
       <div className='m-0'>
         <Table striped bordered hover responsive  >
            <thead >
            <tr className='text-center'>
                <th>#</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Adresse email</th>
                <th>Numéro de téléphone</th>
                <th>Adresse</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody className='text-center'>
                {contacts.map( contact => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.lastname}</td>
                        <td>{contact.firstname}</td>
                        <td>{contact.email}</td>
                        <td>+221 {contact.tel}</td>
                        <td>{contact.address}</td>
                        <td>
                            <DeleteButton onDelete={ () => onDelete(contact.id)} contact={contact}/>&nbsp;
                            <EditButton onUpdate={() => goToUpdate(contact)} />
                        </td>
                    </tr>
                ))}
            </tbody>
         </Table>
       </div>
    );
}

function DeleteButton({contact, onDelete}){
    return (
        <Delete contact={contact} onDelete={onDelete}/>
    );
}



function EditButton({onUpdate}){
    return (
        <Button variant='danger' onClick={onUpdate}>
            <FontAwesomeIcon icon={faEdit}/> 
        </Button>
    );
}

export default List;