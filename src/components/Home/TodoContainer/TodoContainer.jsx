import { IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { MdDescription } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaCheckToSlot } from "react-icons/fa6";

const tasks = [
    {
        title: 'Update Website Content',
        description: 'Revise and update the existing content on the website to reflect the latest information and improvements. Ensure accuracy and coherence across all pages.',
        deadline: '2023-03-15',
        priority: 'Moderate',
        status: 'Pending'
    },
    {
        title: 'Implement New Feature X',
        description: 'Integrate and launch the highly anticipated feature X, addressing user feedback and enhancing the overall functionality of the platform.',
        deadline: '2023-04-05',
        priority: 'High',
        status: 'Pending'
    },
    {
        title: 'Conduct User Feedback Survey',
        description: 'Develop and distribute a user feedback survey to gather insights and opinions about the current user experience. Analyze results to identify areas for improvement.',
        deadline: '2023-03-30',
        priority: 'Moderate',
        status: 'Pending'
    },
    {
        title: 'Monthly Data Backup',
        description: 'Perform a comprehensive backup of the website data to ensure the security and integrity of user information. Verify the backup\'s success and troubleshoot any issues.',
        deadline: '2023-03-08',
        priority: 'High',
        status: 'Completed'
    },
    {
        title: 'Social Media Campaign Launch',
        description: 'Plan and execute a social media campaign to promote the platform\'s latest features and improvements. Create engaging content and schedule posts across various channels.',
        deadline: '2023-04-10',
        priority: 'Moderate',
        status: 'Pending'
    }
];
const TodoContainer = () => {
    return (
        <div>
            <div className="container">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                    <div>
                        <Typography variant="h5" className="text-center font-medium">Incomplated Task</Typography>
                        <div>
                            {tasks?.map(task =>
                                <div key={task.title}>
                                    <div className="border-b border-b-secondery py-2 flex justify-between items-center">
                                        <div>
                                            <Typography variant="h6" className="font-medium">{task?.title}</Typography>
                                            <Typography variant="paragraph" className="flex items-center gap-2 text-base font-normal"><SlCalender /> {task?.deadline}</Typography>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Tooltip className='bg-white border border-secondery text-primary text-sm' content='Description'><IconButton className="bg-primary text-xl"><MdDescription /></IconButton></Tooltip>
                                            <Tooltip className='bg-white border border-secondery text-primary text-sm' content='Complate'><IconButton className="bg-green-500 text-xl"><FaCheckToSlot /></IconButton></Tooltip>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                    <div>
                        <Typography variant="h5" className="text-center font-medium">Complated Task</Typography>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;