import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Search({onChangeSearchText}){
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    onChangeSearchText(query);
    
  };
    return (
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
        <Form.Control
          placeholder="Rechercher"
          aria-label="Rechercher"
          aria-describedby="basic-addon1"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </InputGroup>
    );
}

export default Search;