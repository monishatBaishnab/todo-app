import { Typography } from "@material-tailwind/react";
import { motion } from 'framer-motion';

const UserBenifits = () => {
    const userProfiles = [
        {
            profession: "Developer",
            benefit: "Enhance coding prowess with cutting-edge tools and resources."
        },
        {
            profession: "Corporate Professional",
            benefit: "Streamline workflows, boost productivity, and gain a competitive edge in the business landscape."
        },
        {
            profession: "Banker/Financial Expert",
            benefit: "Navigate the complexities of the financial world with insights, analytics, and specialized tools."
        },
        {
            profession: "Creative Professional (Graphic Designer)",
            benefit: "Unleash artistic potential through features tailored for graphic designers and content creators."
        },
        {
            profession: "Aspiring Entrepreneur",
            benefit: "Empower entrepreneurial journey with a toolkit for business planning, strategy, and execution."
        }
    ];

    return (
        <div>
            <div className="container">
                <Typography variant="h3" className="text-center text-primary">Key User Professions and Benefits</Typography>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
                    {userProfiles?.map(profile =>
                        <motion.div whileHover={{y: -5}} key={profile?.profession} className="p-5 border border-secondery rounded-sm hover:border-primary transition-[border] duration-500">
                            <Typography className="font-medium">{profile?.profession}</Typography>
                            <Typography>{profile?.benefit}</Typography>
                        </motion.div>)}
                </div>
            </div>
        </div>
    );
};

export default UserBenifits;