import { Button, Dialog, DialogBody, IconButton, Input, Option, Select, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler, Textarea, Typography } from "@material-tailwind/react";
import { FaCheckToSlot, FaPlus } from "react-icons/fa6";
import { MdDelete, MdDescription, MdEdit } from "react-icons/md";
import PropTypes from 'prop-types';
import { CgSpinnerTwo } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const TaskActions = ({ pending, actions, task, refetch }) => {
    const { complateTask, deleteTask, loading} = actions || {};
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [priority, setPriority] = useState(task?.priority);

    const [dialogOpen, setDialogOpen] = useState(false);
    const handleEditDialogOpen = () => setDialogOpen(!dialogOpen);

    const { pendingTaskRefetch, complatedTaskRefetch } = refetch || {};

    const editTask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        // console.log({title, deadline, description, priority});
        const newTask = {
            userId: task?.userId,
            title,
            deadline,
            description,
            priority,
            status: task?.status
        }
        try {
            await axios.put(`http://localhost:5000/tasks/${task._id}`, newTask);
            handleEditDialogOpen();
            task?.status === 'pending' ? pendingTaskRefetch() : complatedTaskRefetch();
            toast.success('Success');
        } catch (error) {
            console.log(error);
            handleEditDialogOpen();
            toast.error('Error');
        }
    }

    return (
        <div>
            <SpeedDial placement="left">
                <SpeedDialHandler>
                    <IconButton size="lg" className="rounded-full bg-primary">
                        {loading ? <CgSpinnerTwo className="animate-spin" /> : <FaPlus className="h-5 w-5 transition-transform group-hover:rotate-45" />}
                    </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent className="flex-row bg-primary/10 rounded-full">
                    {
                        pending && <SpeedDialAction onClick={() => complateTask(task)} className="hover:text-primary">
                            <FaCheckToSlot className="text-xl" />
                        </SpeedDialAction>
                    }

                    <SpeedDialAction onClick={handleEditDialogOpen} className="hover:text-primary">
                        <MdEdit className="text-xl" />
                    </SpeedDialAction>
                    <SpeedDialAction onClick={() => deleteTask(task)} className="hover:text-primary">
                        <MdDelete className="text-xl" />
                    </SpeedDialAction>
                    <SpeedDialAction onClick={handleOpen} className="hover:text-primary">
                        <MdDescription className="text-xl" />
                    </SpeedDialAction>
                </SpeedDialContent>
            </SpeedDial>
            <Dialog open={open} handler={handleOpen}>
                <DialogBody>
                    {task?.description || ''}
                </DialogBody>
            </Dialog>

            <Dialog open={dialogOpen} handler={handleEditDialogOpen}>
                <DialogBody>
                    <form className="space-y-3" onSubmit={editTask}>
                        <div className="space-y-2">
                            <Typography variant="h6" color="blue-gray" className="font-medium"> Title </Typography>
                            <Input name="title" defaultValue={task.title} size="lg" placeholder="Todo Title" className=" !border-t-blue-gray-200 focus:!border-t-primary focus:border-primary" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="space-y-2">
                            <Typography variant="h6" color="blue-gray" className="font-medium"> Deadline </Typography>
                            <Input name="deadline" defaultValue={task.deadline} size="lg" placeholder="Todo Deadline / yy-mm-dd" className=" !border-t-blue-gray-200 focus:!border-t-primary focus:border-primary" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="space-y-2">
                            <Typography variant="h6" color="blue-gray" className="font-medium"> Description </Typography>
                            <Textarea name="description" defaultValue={task.description} size="lg" placeholder="Todo Description" className=" !border-t-blue-gray-200 focus:!border-t-primary focus:border-primary" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="space-y-2">
                            <Typography variant="h6" color="blue-gray" className="font-medium"> Priority </Typography>
                            <Select onChange={(val) => setPriority(val)} value={priority} label="Todo Priority">
                                <Option value="Low">Low</Option>
                                <Option value="Moderate">Moderate</Option>
                                <Option value="High">High</Option>
                            </Select>
                        </div>
                        <Button type="submit" className="bg-primary">Update</Button>
                    </form>
                </DialogBody>
            </Dialog>
        </div>
    );
};

TaskActions.propTypes = {
    pending: PropTypes.bool,
    actions: PropTypes.object,
    task: PropTypes.object,
    refetch: PropTypes.object,
}

export default TaskActions;