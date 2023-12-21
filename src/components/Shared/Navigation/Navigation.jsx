import { IconButton, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom/dist";

const Navigation = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 768 && setActive(false));
    }, [])

    return (
        <div className="border-b border-b-secondery">
            <div className="container py-2 flex items-center justify-between relative h-16">
                <Link><Typography variant="h4" className="text-primary">Task Management App</Typography></Link>
                <div className="hidden md:flex items-center gap-4">
                    <Link className="hover:text-primary">Home</Link>
                    <Link className="hover:text-primary">Add Task</Link>
                    <Link className="hover:text-primary">Profile</Link>
                </div>
                <div className="md:hidden">
                    <IconButton onClick={() => setActive(!active)} variant="text" ripple={false} className="hover:bg-transparent focus:bg-transparent active:bg-transparent text-primary"><FaBars className="text-2xl" /></IconButton>
                </div>
                <div className={`absolute right-10 w-60 p-5 border border-secondery bg-white transition-all duration-300 ${active ? 'top-20 opacity-100 visible' : 'top-[70px] invisible opacity-0'}`}>
                    <div className="flex flex-col items-center gap-4">
                        <Link className="hover:text-primary">Home</Link>
                        <Link className="hover:text-primary">Add Task</Link>
                        <Link className="hover:text-primary">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;