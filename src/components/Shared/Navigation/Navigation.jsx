import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom/dist";

const Navigation = () => {
    const [active, setActive] = useState(false);
    return (
        <div className="border-b border-b-secondery h-16">
            <div className="container py-2 flex items-center justify-between relative">
                <Link><Typography variant="h4" className="text-primary">MobileShop</Typography></Link>
                <div>
                    <IconButton onClick={() => setActive(!active)} variant="text" ripple={false} className="hover:bg-transparent focus:bg-transparent active:bg-transparent text-primary"><FaCartShopping className="text-2xl" /></IconButton>
                </div>
                <div className={`absolute w-full right-0 sm:right-10 sm:w-80 p-5 border border-secondery bg-white transition-all duration-300 ${active ? 'top-20 opacity-100 visible' : 'top-[70px] invisible opacity-0'}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, temporibus!
                </div>
            </div>
        </div>
    );
};

export default Navigation;