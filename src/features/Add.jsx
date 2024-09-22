import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { createNewContact } from '../services/contactService';
import DismissibleToast from '../components/toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/title';
import LoadingButton from '../components/loadButton';

function FormContent() {
  const [errorSubmit, setErrorSubmit] = useState(false);
  const { Formik } = formik;
  let navigate=useNavigate();

  const schema = yup.object().shape({
    firstname: yup.string().required('Ce champs est requis'),
    lastname: yup.string().required('Ce champs est requis'),
    email: yup.string().email('Adresse email invalide').required('L’email est requis'),
    tel: yup.string().matches(/^[0-9]{9}$/, 'Le numéro doit contenir exactement 9 chiffres')
    .required('Ce champ est requis'),
    address: yup.string().required('Ce champs est requis'),
  });

  async function handleSubmit(values){
      const data=await createNewContact(values)

      if(data){
        navigate("/", { state: { message: "Contact sauvegardé avec succès !" } });
      }else{
        setErrorSubmit(true)
      }
    }

 return (
  <>
      { errorSubmit && (
        <DismissibleToast bg="danger" message="Ce numéro de téléphone existe." />
      )}
    <Formik
    validationSchema={schema}
    onSubmit={(values) => {
      // Fonction de soumission
      console.log('Données soumises:', values);
      handleSubmit(values);
    }}
    initialValues={{
      firstname: '',
      lastname: '',
      email: '',
      tel: '',
      address: '',
    }}
    >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik101"
            className="position-relative"
          >
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              isValid={touched.firstname && !errors.firstname}
              isInvalid={!!errors.firstname}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.firstname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label>Prénom</Form.Label>
            <Form.Control 
              type="text"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              isValid={touched.lastname && !errors.lastname}
              isInvalid={!!errors.lastname}
            />

            <Form.Control.Feedback type="invalid" tooltip>
              {errors.lastname}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4">
        <Form.Group as={Col} md="6" controlId="validationFormikemail2">
            <Form.Label>Adresse-email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik103"
            className="position-relative"
          >
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              type="text"
              name="tel"
              value={values.tel}
              onChange={handleChange}
              isInvalid={!!errors.tel}
              isValid={touched.tel && !errors.tel}
            />

            <Form.Control.Feedback type="invalid" tooltip>
              {errors.tel}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-4">
        <Form.Group
            as={Col}
            md="12"
            controlId="validationFormik104"
            className="position-relative"
          >
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              isInvalid={!!errors.address}
              isValid={touched.address && !errors.address}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <LoadingButton></LoadingButton>
      </Form>
    )}
    </Formik>
  </>
 );
}


function Add(){
    return (
      <div className="mx-auto col-lg-6 col-sm-12 col-xs-12">
        <Title title ="Ajout d'un contact" />
        <FormContent/>
      </div>
    )
}

export default Add;