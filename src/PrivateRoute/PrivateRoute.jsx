import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    if(isLoading){
        return <Loading />;
    }
    if(!user){
        return <Navigate to='/signin'></Navigate>;
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;