import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './Read.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Read = () =>{
    const [users , setUsers]=useContext(UserContext);
    const {id}=useParams();
    const readUser= users.filter(user => user.id ==id);
    


    return(


        <React.Fragment>
        <div className="read">
            <div className="read-id">
                <span className="desc">ID:</span>
                <span className="details">{readUser[0].id}</span>

            </div>
            <div className="read-name">
            <span className="desc">Name:</span>
                <span className="details">{readUser[0].name}</span>

                
            </div>
            <div className="read-email">
            <span className="desc">Email:</span>
                <span className="details">{readUser[0].email}</span>

                
            </div>
            <div className="read-mobile">
            <span className="desc">Mobile:</span>
                <span className="details">{readUser[0].mobile}</span>

                
            </div>
            <div className="read-role">
            <span className="desc">Role:</span>
                <span className="details">{readUser[0].role}</span>

                
            </div>

        </div>
        <div className="home-link text-center">
        <Link exact to ="/">
                <Button variant="secondary">Back To Home</Button>
                </Link>

        </div>
        </React.Fragment>

    
    )
}

export default Read;