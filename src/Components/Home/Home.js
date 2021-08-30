import React, { useContext } from 'react';
import { Button , Table } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import './Home.css';
import { Link } from 'react-router-dom';




const Home = () =>{
    const [ users , setUsers] = useContext(UserContext);
    const length= users.length;
    console.log(length)
    



    return(
        <div className="home">
            <div className="wrapper">
            <div className="create-btn mt-5 mb-3">
                <Link to="/createuser">
            <Button variant="primary">Create User</Button>
            </Link>
            </div>

            <div className="table">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                        <th>ID</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Action</th>

                        </tr>
                        </thead>
                    <tbody>
                        {
                            length ? (users.map(user =>{
                                return(


                            
                        <tr>
                            <td data-label="ID" className="data">{user.id}</td>
                            <td data-label="Name">{user.name}</td>
                            <td data-label="Email">{user.email}</td>
                            <td data-label="Mobile">{user.mobile}</td>
                            <td data-label="Role">{user.role}</td>
                            <div className="td-actions">
                                <div className="td">
                                <td></td>

                                </div>

                                <div className="actions">
                                
                                <div className="btn action">
                                    <Link to={"/read/"+user.id}>
                                <Button variant="success">Read</Button>
                                </Link>
                                </div>
                                <div className="btn-action edit-btn">
                                    <Link to ={"/edituser/"+user.id}>
                                <Button variant="primary"  >Edit</Button>
                                </Link>
                                </div>
                                <div className="btn-action">
                                    <Link to ={"/delete/"+user.id}>
                                <Button variant="danger" >Delete</Button>
                                </Link>
                                </div>
                            
                                </div>

                            </div>


                            
                            
                            
                            
                                </tr>

                                )
                            
                                })
                                ):(
                                <div className="message text-center">
                                    < h4 className="text-center">No Users To Show</h4>
                                </div>
                                    )

                                    } 
                                

                        

                            
                        
                        

                    </tbody>
                </Table>

              
            

            </div>
            </div>
        </div>
    )
}
export default Home;