import HomeBanner from "../components/Home/HomeBanner/HomeBanner";
import TaskContainer from "../components/Home/TaskContainer/TaskContainer";

const Home = () => {
    const user = true;
    return (
        <div>
            {user ? <TaskContainer /> : <HomeBanner />}
        </div>
    );
};

export default Home;