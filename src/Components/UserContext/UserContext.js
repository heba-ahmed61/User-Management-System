import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [users , setUsers] = useState([

        {id: 1 , name: "heba" , email: "heba@test.com" , mobile: "01276598345" , role: "FrontEndDev " },
        {id: 2 , name: "ahmed" , email: "ahmed@test.com" , mobile: "0127634245" , role: "BackEndDev " }, 
        {id: 3 , name: "mohamed" , email: "mohamed@test.com" , mobile: "0123348345" , role: "FullStackDev " },
        
    ]);
    return(
        
        <UserContext.Provider value={[users , setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}
