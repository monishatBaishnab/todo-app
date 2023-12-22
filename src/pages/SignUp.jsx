import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiImageAlt } from "react-icons/bi";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
    const { signUpWithEmailAndPass, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        try {
            await signUpWithEmailAndPass(email, password);
            await updateUser(name, photo);
            navigate('/');
            toast.success("Signin Success.");
        } catch (error) {
            console.log(error);
            toast("Signin Faild.");
        }
    }

    return (
        <div>
            <div className="flex items-center justify-center flex-col w-full min-h-screen">
                <div className="w-full md:w-[400px] py-5">
                    <div className="mb-3 text-center">
                        <Typography className="text-dark-gray" variant="h4">Create your account</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="paragraph">Unlock all Features!</Typography>
                    </div>
                    <form onSubmit={handleSignUp} className="space-y-5 p-5 w-full">
                        <Input required name="name" className="focus:outline-dark-gray" type="text" label="Name" icon={<AiOutlineUser />} />
                        <Input required name="photo" className="focus:outline-dark-gray" type="text" label="Photo URL" icon={<BiImageAlt />} />
                        <Input required name="email" className="focus:outline-dark-gray" type="email" label="Email" icon={<HiOutlineMail />} />
                        <Input required name="password" className="focus:outline-dark-gray" type="password" label="Password" icon={<RiLockPasswordLine />} />
                        <Checkbox name="tarms" label='Accept terms and conditions' />
                        <Button type="submit" className="block w-full bg-primary shadow-none hover:shadow-none">Sign up</Button>
                    </form>
                    <Typography className="text-center">You have account? <Link to='/signin' className="text-light-orange">Signin now</Link></Typography>
                </div>
            </div>
        </div>
    );
};

export default SignUp;