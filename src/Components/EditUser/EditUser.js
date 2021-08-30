import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './EditUser.css';
import { Button } from 'react-bootstrap';
import {Link } from 'react-router-dom'

const EditUser = () =>{

    const [users , setusers]=useContext(UserContext);
    const {id} = useParams();
    const editUser =users.filter(user => user.id ==id);
    const [name , setName] = useState(editUser[0].name)
    const [email,setEmail]=useState(editUser[0].email)
    const [mobile,setMobile]=useState(editUser[0].mobile)
    const [role,setRole]=useState(editUser[0].role)
    

    function editName (e) {

    setName(e.target.value)
    editUser[0].name = name
    
    }

    function editEmail (e){

        setEmail(e.target.value);
        editUser[0].email=email
        
    }
    function editMobile (e){

        setMobile(e.target.value);
        editUser[0].mobile=mobile
    }
    function editRole (e){

        setRole(e.target.value);
        editUser[0].role=role
    }

    function editUsers(){

        setusers([...users])


    }
    




    return(
        <div className="form-container">

            <form>
            <div className="id">
                <span className="id-span">ID:</span>
                <span className="mx-3 id-number" >{editUser[0].id}</span>

            </div>
            <div className="edit-name mt-4">
                <p>Name</p>
                <input type="text" 
                value={name} onChange ={editName}/>
            </div>
            <div className="edit-email mt-4">
            <p>Email</p>
                <input type="email" value={email} onChange ={editEmail} />

            </div>
            <div className="edit-mobile mt-4">
            <p>Mobile</p>
                <input type="number" value={mobile} onChange={editMobile} />
            </div>
            <div className="edit-role mt-4">
            <p>Role</p>
                <input type="text" value={role}  onChange={editRole}/>
            </div>

            


            </form>
            <div className="form-btns my-5">
            <Link exact to="/">
            <Button variant="primary" onClick={()=> editUsers}>Edit</Button></Link>
            <Link exact to="/">
            <Button variant="secondary  " className="mx-3">Back To Home</Button>
            </Link>
            </div>

            
        </div>
    );
}
export default EditUser;