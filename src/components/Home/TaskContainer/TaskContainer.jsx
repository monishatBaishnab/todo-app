import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

import Tasks from "./Tasks";


const TaskContainer = () => {
    const { user } = useContext(AuthContext);

    const getTasks = async (status) => {
        const res = await axios.get(`https://todo-app-server-cyan.vercel.app/tasks/${user?.uid}?status=${status}`);
        return res.data;
    }
    const { data: pendingTasksData, refetch: pendingTaskRefetch } = useQuery({ queryKey: ['pendingTasks'], queryFn: () => getTasks('pending') });
    const { data: ongoingTasksData, refetch: ongoingTaskRefetch } = useQuery({ queryKey: ['ongoingTasks'], queryFn: () => getTasks('ongoing') });
    const { data: complateTasksData, refetch: complatedTaskRefetch } = useQuery({ queryKey: ['complatedTasks'], queryFn: () => getTasks('complated') });

    return (
        <div>
            <div className="container">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                    <Tasks tasks={pendingTasksData} title='Pending' refetch={{ pendingTaskRefetch, complatedTaskRefetch, ongoingTaskRefetch }} />
                    <Tasks tasks={ongoingTasksData} title='Ongoing' refetch={{ pendingTaskRefetch, complatedTaskRefetch, ongoingTaskRefetch }} />
                    <Tasks tasks={complateTasksData} title='Complated' refetch={{ pendingTaskRefetch, complatedTaskRefetch, ongoingTaskRefetch }} />
                </div>
            </div>
        </div>
    );
};

export default TaskContainer;