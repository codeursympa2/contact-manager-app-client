import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function Search(){
    return (
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Rechercher"
          aria-label="Rechercher"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    );
}

export default Search;