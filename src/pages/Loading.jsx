import { FaSpinner } from "react-icons/fa6";

const Loading = () => {
    return (
        <div className="flex bg-white/90 items-center justify-center fixed bottom-0 top-0 left-0 right-0 dark:bg-slate-800/90">
            <FaSpinner className="text-5xl animate-spin" />
        </div>
    );
};

export default Loading;