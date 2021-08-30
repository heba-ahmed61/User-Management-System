import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import {Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Delete = () =>{

    const [users , setUsers] =useContext(UserContext);
    const {id}=useParams();

    
    function deleteUser(id){

        const user = users.filter(user => user.id !=id);
        setUsers(user)
    }


    
    
    

    return(
        
        <Modal.Dialog >
    <Modal.Header >
    <Modal.Title>Are You Sure You Want To Delete ?</Modal.Title>
    </Modal.Header>

    

    <Modal.Footer>
        <Link exact to ="/">
    <Button variant="secondary">Cancel</Button>
    </Link>
    <Link exact to ="/">
    <Button  variant="danger" onClick={()=>deleteUser(id)} >Delete</Button>
    </Link>
    </Modal.Footer>
</Modal.Dialog>

    );
}
export default Delete;
