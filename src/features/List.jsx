import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, } from '@fortawesome/free-solid-svg-icons';
import Delete from './Delete';

function List({contacts,onDelete}){
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
                            <DeleteButton onDelete={() => onDelete(contact.id)} contact={contact}/>&nbsp;
                            <EditButton></EditButton>
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

function EditButton(){
    return (
        <Button variant='danger' >
            <FontAwesomeIcon icon={faEdit}/> 
        </Button>
    );
}

export default List;