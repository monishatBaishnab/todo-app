import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const { user } = useContext(AuthContext);
    const [priority, setPriority] = useState('');
    const navigate = useNavigate();

    const addTask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        // console.log({title, deadline, description, priority});
        const newTask = {
            userId: user?.uid,
            title,
            deadline,
            description,
            priority,
            status: 'pending' 
        }
        try {
            await axios.post(`https://todo-app-server-cyan.vercel.app/tasks/`, newTask);
            toast.success('Success');
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error('Error');
        }
    }
    return (
        <div>
            <div className="container">
                <Typography variant="h3" className="text-center">Enrich Your Schedule</Typography>
                <form className="space-y-3 max-w-lg mx-auto" onSubmit={addTask}>
                    <div className="space-y-2">
                        <Typography variant="h6" color="blue-gray" className="font-medium"> Title </Typography>
                        <Input name="title" size="lg" placeholder="Todo Title" className=" !border-t-blue-gray-200 focus:!border-t-primary focus:border-primary" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="space-y-2">
                        <Typography variant="h6" color="blue-gray" className="font-medium"> Deadline </Typography>
                        <Input name="deadline" size="lg" placeholder="Todo Deadline / yy-mm-dd" className=" !border-t-blue-gray-200 focus:!border-t-primary focus:border-primary" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="space-y-2">
                        <Typography variant="h6" color="blue-gray" className="font-medium"> Description </Typography>
                        <Textarea name="description" size="lg" placeholder="Todo Description" className=" !border-t-blue-gray-200 focus:!border-t-primary focus:border-primary" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="space-y-2">
                        <Typography variant="h6" color="blue-gray" className="font-medium"> Priority </Typography>
                        <Select onChange={(val) => setPriority(val)} label="Todo Priority">
                            <Option value="Low">Low</Option>
                            <Option value="Moderate">Moderate</Option>
                            <Option value="High">High</Option>
                        </Select>
                    </div>
                    <Button type="submit" className="bg-primary">Add</Button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;