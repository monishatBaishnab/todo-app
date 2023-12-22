import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';

const HomeBanner = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-hero min-h-[80vh] bg-no-repeat bg-cover">
            <div className="min-h-[80vh] bg-primary/90">
                <div className="container text-white text-center space-y-3 min-h-[80vh] flex flex-col items-center justify-center">
                    <Typography variant="h2" className="">Your Ultimate Task Management Companion</Typography>
                    <Typography variant="paragraph" className="font-normal max-w-2xl mx-auto">Streamline your day with TaskFlow Pro - the ultimate task management app designed to boost your productivity. Organize your tasks effortlessly, set priorities, and stay on top of deadlines. With intuitive features and a user-friendly interface, TaskFlow Pro transforms the way you work, ensuring you achieve your goals with ease. Experience seamless task management like never before!</Typography>
                    <motion.div whileHover={{y: -5}}><Button onClick={() => navigate('/signin')} color="deep-orange" className="">{`Let's Explore`}</Button></motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;