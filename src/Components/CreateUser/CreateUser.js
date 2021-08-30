import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext/UserContext';
import './CreateUser.css';
import{Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const CreateUser = () =>{

    const [users , setUsers]= useContext(UserContext);
    const [id ,setId]=useState("");
    const [name,setName]=useState("");
    const [email ,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [role ,setRole]=useState("");
    
    function handelId(e){
        setId(e.target.value)
    
    }
    function handelName(e){
        setName(e.target.value)
        
    }
    function handelEmail(e){
        setEmail(e.target.value)
        
    }
    function handelMobile(e){
        setMobile(e.target.value)
        
    }
    function handelRole(e){
        setRole(e.target.value)
        
    }

    function addUser (){
        if (id !='' && name !='' && email!=''&& mobile !='' && role!='')  {

                setUsers([...users , {id:id , name:name, email:email , mobile:mobile , role:role}])

        }

                
    }

    return(
        <div className="form">
            <div className="container">
                <div className="form-wrapper">

            < form onSubmit  >
                <div className="form-id">
                <p>ID</p>
                    <input type="number" placeholder="Enter ID" required
                    value={id}
                    onChange={handelId}
                    name="id"
                    />
                </div>

                <div className="form-name mt-4">
                <p>Name</p>
                    <input type="text" placeholder="Enter Name" required
                    value={name}
                    onChange={handelName}


                    
                    />
                    

                </div>

                <div className="form-email mt-4">
                <p>Email</p>
                    <input type="email" placeholder="Enter Email" required
                    value={email}
                    onChange={handelEmail}

                    />
                </div>

                <div className="form-mobile mt-4">
                <p>Mobile</p>
                    <input type="number" placeholder="Enter Number "  required
                    value={mobile}
                    onChange={handelMobile}

                    />
                </div>

                <div className="form-role mt-4">
                <p>Role</p>
                    <input type="text" placeholder="Enter Role" required
                    value={role}
                    onChange={handelRole}

                    />
                    
                </div>

                <div className=" submitButton">

            
                </div>

                <div className="btns my-5">

                <Link exact to="/">
            
            <Button   variant="primary" onClick={()=> addUser()}>create</Button>
            </Link>
            
            <Link exact to ="/">

            <Button variant="secondary" className="mx-3">Back To Home</Button>
            </Link>

            </div>




            </form>
        
            </div>
            </div>
            </div>
    
        
    )
}
export default CreateUser;