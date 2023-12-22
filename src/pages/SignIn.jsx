import { Button, Input, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SignIn = () => {
    const { signInWithEmailAndPass, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            await signInWithEmailAndPass(email, password);
            navigate('/');
            toast.success("Signin Success.");
        } catch (error) {
            console.log(error);
            toast.error("Signin Faild.");
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            navigate('/');
            toast.success("Signin Success.");
        } catch (error) {
            console.log(error);
            toast.error("Signin Faild.");
        }
    }

    return (
        <div>
            <div>
                <div className="flex items-center justify-center flex-col w-full min-h-screen">
                    <div className="w-full md:w-[400px] py-5">
                        <div className="mb-3 text-center">
                            <Typography className="text-dark-gray" variant="h4">Signin to your Account</Typography>
                            <Typography className="text-blue-gray-500 font-normal" variant="paragraph">Welcome back! Select method to Sign in:</Typography>
                        </div>
                        <div className="p-5">
                            <Button onClick={handleGoogleLogin} variant="outlined" className="flex items-center justify-center basis-full sm:basis-[calc(50%_-_8px)] w-full gap-2 capitalize text-base font-normal py-2.5 border-[rgba(128,_152,_249,_0.50)]"><FcGoogle className="text-xl" />Google</Button>
                        </div>
                        <Typography className="text-center">or continue with email</Typography>
                        <form onSubmit={handleSignIn} className="space-y-5 p-5">
                            <Input required name="email" className="focus:outline-dark-gray" type="email" label="Email" icon={<HiOutlineMail />} />
                            <Input required name="password" className="focus:outline-dark-gray" type="password" label="Password" icon={<RiLockPasswordLine />} />
                            <Button type="submit" className="block w-full bg-primary shadow-none hover:shadow-none">Sign in</Button>
                        </form>
                        <Typography className="text-center">{`Don't have account?`} <Link to='/signup' className="text-light-orange">Signup now</Link></Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;