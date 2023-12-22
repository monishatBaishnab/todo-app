import { Typography } from "@material-tailwind/react";
import TaskActions from "./TaskActions";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { SlCalender } from "react-icons/sl";
import { useDrag } from "react-dnd";

const TaskCard = ({refetch, task, pending}) => {
    const { pendingTaskRefetch, complatedTaskRefetch } = refetch || {};

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
                    await axios.delete(`https://todo-app-server-cyan.vercel.app/tasks/${task._id}`);
                    pendingTaskRefetch();
                    complatedTaskRefetch();
                    toast.success('Success');
                } catch (error) {
                    console.log(error);
                    toast.error('Faild');
                }
            }
        });

    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: task,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div ref={drag} className={`border-b cursor-grab border-b-secondery py-2 flex justify-between items-center ${isDragging && 'opacity-70'}`}>
            <div>
                <Typography variant="h6" className="font-medium">{task?.title}</Typography>
                <Typography variant="paragraph" className="flex items-center gap-2 text-base font-normal"><SlCalender /> {task?.deadline}</Typography>
            </div>
            <div>
                <TaskActions task={task} refetch={{ pendingTaskRefetch, complatedTaskRefetch }} actions={{ complateTask, deleteTask }} pending={pending} />
            </div>
        </div>
    );
};

TaskCard.propTypes = {
    refetch: PropTypes.object,
    task: PropTypes.object,
    pending: PropTypes.bool,
}

export default TaskCard;