import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";


const TaskContainer = () => {
    const { user } = useContext(AuthContext);

    const getTasks = async (status) => {
        const res = await axios.get(`https://todo-app-server-cyan.vercel.app/tasks/${user?.uid}?status=${status}`);
        return res.data;
    }
    const { data: pendingTasksData, refetch: pendingTaskRefetch } = useQuery({ queryKey: ['pendingTasks'], queryFn: () => getTasks('pending') });

    const { data: complateTasksData, refetch: complatedTaskRefetch } = useQuery({ queryKey: ['complatedTasks'], queryFn: () => getTasks('complated') });

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: 'task',
            drop: (item) => complateTask(item),
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            })
        })
    )

    const complateTask = async (task) => {
        const body = {
            userId: task.userId,
            title: task.title,
            description: task.description,
            deadline: task.deadline,
            priority: task.priority,
            status: 'complated'
        }

        try {
            await axios.put(`https://todo-app-server-cyan.vercel.app/tasks/${task._id}`, body);
            pendingTaskRefetch();
            complatedTaskRefetch();
            toast.success('Success');
        } catch (error) {
            console.log(error);
            toast.error('Faild');
        }
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
                                    <TaskCard task={task} refetch={{ pendingTaskRefetch, complatedTaskRefetch }} pending />
                                </div>)}
                        </div>
                    </div>
                    <div>
                        <Typography variant="h5" className="text-center font-medium">Complated Task</Typography>
                        <div ref={drop}>
                            {complateTasksData?.map(task =>
                                <div key={task?._id}>
                                    <TaskCard task={task} refetch={{ pendingTaskRefetch, complatedTaskRefetch }} />
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskContainer;