import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom/dist";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navigation = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 768 && setActive(false));
    }, [])

    const handleSignOut = async () => {
        try {
            await signOutUser();
            toast.success('Signed out.');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="border-b border-b-secondery">
            <div className="container py-2 flex items-center justify-between relative h-16">
                <Link><Typography variant="h4" className="text-primary">Task Management App</Typography></Link>
                <div className="hidden md:flex items-center gap-4 ml-auto mr-5">
                    <Link className="hover:text-primary">Home</Link>
                    <Link to='/add-task' className="hover:text-primary">Add Task</Link>
                    <Link to='/profile' className="hover:text-primary">Profile</Link>
                </div>
                <div>
                    {user ? <Button onClick={handleSignOut} size="sm" color="deep-orange">Signout</Button> : <Button onClick={() => navigate('/signin')} size="sm" color="deep-orange">Signin</Button>}
                    <IconButton onClick={() => setActive(!active)} variant="text" ripple={false} className="hover:bg-transparent focus:bg-transparent active:bg-transparent text-primary md:hidden"><FaBars className="text-2xl" /></IconButton>
                </div>
                <div className={`absolute right-10 w-60 p-5 border border-secondery bg-white transition-all duration-300 ${active ? 'top-20 opacity-100 visible' : 'top-[70px] invisible opacity-0'}`}>
                    <div className="flex flex-col items-center gap-4">
                        <Link className="hover:text-primary">Home</Link>
                        <Link to='/add-task' className="hover:text-primary">Add Task</Link>
                        <Link to='/profile' className="hover:text-primary">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;