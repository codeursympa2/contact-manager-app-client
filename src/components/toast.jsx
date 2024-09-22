import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function DismissibleToast({message,bg}) {
  const [show, setShow] = useState(true);
  return (
    <Row>
      <Col md={6} className="mb-2">
      <ToastContainer position="bottom-center" className="p-3" style={{ zIndex: 1 }}>
        <Toast bg={bg}  onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Contact Manager App</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>{message}</Toast.Body>
        </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default DismissibleToast;