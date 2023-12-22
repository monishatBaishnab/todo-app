import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <div className="container space-y-1">
            <Typography variant="h3">Profile</Typography>
            <div className="w-20 h-20 overflow-hidden rounded-md">
                <img src={user?.photoURL} alt="" />
            </div>
            <Typography variant="h5" className="font-normal">Name: {user?.displayName}</Typography>
            <Typography variant="h6" className="font-normal">Email: {user?.email}</Typography>
            <Typography variant="h6" className="font-normal">User Id: {user?.uid}</Typography>
        </div>
    );
};

export default Profile;