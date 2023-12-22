import { Typography } from "@material-tailwind/react";
import { BsFacebook, BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillInstagram, AiOutlineGithub } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="bg-primary text-white">
                <div className="container border-b border-b-[rgba(255,_255,_255,_0.17)]">
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <Typography variant="h5" className="mb-7">Task Management</Typography>

                            <Typography className="space-y-2" as='ul'>
                                <Typography className="flex items-center gap-2" as='li'><HiOutlineMail /> support.task@management.com</Typography>
                                <Typography className="flex items-center gap-2" as='li'><BsTelephone />0000-1111-2222</Typography>
                                <Typography className="flex items-center gap-2" as='li'><BsTelephone />2222-1111-3333</Typography>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" className="mb-7">Quick Links</Typography>

                            <Typography as='ul' className="flex items-start flex-col gap-5">
                                <Typography className="font-normal" as='li'><Link to='/'>Home</Link></Typography>
                                <Typography className="font-normal" as='li'><Link to='/add-task'>Add Task</Link></Typography>
                                <Typography className="font-normal" as='li'><Link to='/signin'>Sign in</Link></Typography>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" className="mb-7">Policies</Typography>

                            <Typography className="space-y-2" as='ul'>
                                <Typography className="flex items-center gap-2" as='li'><Link>Privacy Policy</Link></Typography>
                                <Typography className="flex items-center gap-2" as='li'><Link>Terms of Services  </Link></Typography>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" className="mb-7">Helpful links</Typography>

                            <Typography className="space-y-2" as='ul'>
                                <Typography className="flex items-center gap-2" as='li'><Link>Guide</Link></Typography>
                                <Typography className="flex items-center gap-2" as='li'><Link>Setup my Acount</Link></Typography>
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="flex items-center justify-between">
                        <Typography>&copy; Copyright 2021, TaskManagement. all rights reserved.</Typography>
                        <div className="items-center gap-2 hidden sm:flex">
                            <Link className="opacity-50"><BsFacebook /></Link>
                            <Link className="opacity-50"><AiFillInstagram /></Link>
                            <Link className="opacity-50"><AiOutlineGithub /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;