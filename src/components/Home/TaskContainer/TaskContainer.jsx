import { Typography } from "@material-tailwind/react";

import { SlCalender } from "react-icons/sl";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TaskActions from "./TaskActions";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const TaskContainer = () => {
    const [loading, setLoading] = useState(false);

    const getTasks = async (status) => {
        const res = await axios.get(`http://localhost:5000/tasks/3?status=${status}`);
        return res.data;
    }
    const { data: pendingTasksData, refetch: pendingTaskRefetch } = useQuery({ queryKey: ['pendingTasks'], queryFn: () => getTasks('pending') });

    const { data: complateTasksData, refetch: complatedTaskRefetch } = useQuery({ queryKey: ['complatedTasks'], queryFn: () => getTasks('complated') });

    const complateTask = async (task) => {
        setLoading(true);
        const body = {
            userId: task.userId,
            title: task.title,
            description: task.description,
            deadline: task.deadline,
            priority: task.priority,
            status: 'complated'
        }

        try {
            await axios.put(`http://localhost:5000/tasks/${task._id}`, body);
            pendingTaskRefetch();
            complatedTaskRefetch();
            setLoading(false);
            toast.success('Success');
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('Faild');
        }

    }

    const deleteTask = async (task) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#425A8B",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:5000/tasks/${task._id}`);
                    pendingTaskRefetch();
                    complatedTaskRefetch();
                    setLoading(false);
                    toast.success('Success');
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                    toast.error('Faild');
                }
            }
        });

    }

    return (
        <div>
            <div className="container">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                    <div>
                        <Typography variant="h5" className="text-center font-medium">Incomplat Task</Typography>
                        <div>
                            {pendingTasksData?.map(task =>
                                <div key={task?._id}>
                                    <div className="border-b border-b-secondery py-2 flex justify-between items-center">
                                        <div>
                                            <Typography variant="h6" className="font-medium">{task?.title}</Typography>
                                            <Typography variant="paragraph" className="flex items-center gap-2 text-base font-normal"><SlCalender /> {task?.deadline}</Typography>
                                        </div>
                                        <div>
                                            <TaskActions loading={loading} task={task} refetch={{ pendingTaskRefetch, complatedTaskRefetch }} actions={{ complateTask, deleteTask }} pending />
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                    <div>
                        <Typography variant="h5" className="text-center font-medium">Complated Task</Typography>
                        <div>
                            {complateTasksData?.map(task =>
                                <div key={task?._id}>
                                    <div className="border-b border-b-secondery py-2 flex justify-between items-center">
                                        <div>
                                            <Typography variant="h6" className="font-medium">{task?.title}</Typography>
                                            <Typography variant="paragraph" className="flex items-center gap-2 text-base font-normal"><SlCalender /> {task?.deadline}</Typography>
                                        </div>
                                        <div>
                                            <TaskActions refetch={{ pendingTaskRefetch, complatedTaskRefetch }} loading={loading} task={task} actions={{ complateTask, deleteTask }} />
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskContainer;