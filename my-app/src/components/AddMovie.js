

import {useState} from 'react';
import {Button,Modal, FormControl} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
function AddMovie ({Add}){
    const handleChange =(e)=>{
        setNewMovie({...newMovie ,[e.target.name] :e.target.value});
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie,setNewMovie] =useState({
    Title:'',
    description:'',
    rate:1,
    Id:uuidv4(),
    poster:''
    })

    const handleSave=()=>{
        handleClose()
        Add(newMovie)
    }
return(
<>
    <Button variant="danger" onClick={handleShow}>
        Launch demo modal
    </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl type="text" placeholder="Title" className="" name="Title" onChange={handleChange}/>
            <FormControl type="text" placeholder="description" className="" name="description" onChange={handleChange}/>
            <FormControl type="text" placeholder="rate" className="" name="rate" onChange={handleChange}/>
            <FormControl type="text" placeholder="Id" className="" name="Id" onChange={handleChange} />
            <FormControl type="text" placeholder="poster" className="" name="poster" onChange={handleChange}/>
            </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>Close </Button>
            
            <Button variant="danger" onClick={handleSave}> Save Change </Button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default AddMovie;



