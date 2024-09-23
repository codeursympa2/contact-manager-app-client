import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Delete({contact, onDelete}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant='danger' onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash}/> 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Contact Manager App</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voulez-vous vraiment supprimer {contact.firstname} {contact.lastname} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Non
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Oui
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Delete;