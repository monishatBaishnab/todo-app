import { Typography } from "@material-tailwind/react";
import TaskCard from "./TaskCard";
import PropTypes from 'prop-types';
import axios from "axios";
import toast from "react-hot-toast";
import { useDrop } from "react-dnd";

const Tasks = ({ tasks, refetch, title }) => {
    const {pendingTaskRefetch, complatedTaskRefetch, ongoingTaskRefetch} = refetch;
    const status = title.toLowerCase();

    const [{isOver}, drop] = useDrop(
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
            status
        }

        try {
            if(task?.status !== status){
                await axios.put(`https://todo-app-server-cyan.vercel.app/tasks/${task._id}`, body);
                pendingTaskRefetch();
                complatedTaskRefetch();
                ongoingTaskRefetch();
                toast.success(`Task ${title}`);
            }
        } catch (error) {
            console.log(error);
            toast.error('Faild');
        }
    }

    return (
        <div ref={drop} className={`${isOver && 'bg-primary/10 rounded-md'} p-5`}>
            <Typography variant="h5" className="text-center font-medium">{title}</Typography>
            <div>
                {tasks?.map(task =>
                    <div key={task?._id}>
                        <TaskCard task={task} refetch={refetch} />
                    </div>)}
            </div>
        </div>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array,
    refetch: PropTypes.object,
    title: PropTypes.string,
}

export default Tasks;