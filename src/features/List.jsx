import Table from 'react-bootstrap/Table';
export function List({contacts}){
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
                    </tr>
                ))}
            </tbody>
         </Table>
       </div>
    );
}