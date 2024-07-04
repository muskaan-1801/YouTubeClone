import { InputGroup,Form ,Button} from "react-bootstrap";
import { useEffect,useState } from "react";
import youtube from "../api/youtube";

const SearchInput = ()=>{

  const [searchTerm,setSearchTerm] = useState("");
  const [submitOrNot,setSubmitHandler] = useState(false);

  const submitHandler = ()=>{
    setSubmitHandler(!submitOrNot)
  }
  
  return (
    <div>
      <InputGroup className="mt-3 mb-3">
        <Form.Control
          placeholder="Search..."
          onChange = {(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" 
        type="button" 
        onClick={submitHandler}>Search</Button>{' '}
      </InputGroup>
    </div>
  )
}

export default SearchInput;