import React from 'react';
import { userLoginSignUp } from '../../App';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = (props) => {

const{loggedin}=useContext(userLoginSignUp)

  return (
    <div>
    {loggedin===true?(<>{props.children}</>):(<>{<Navigate to='/login'></Navigate>}</>)}


    </div>
  )
}

export default PrivateRoute;