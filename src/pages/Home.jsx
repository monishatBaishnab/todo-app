import HomeBanner from "../components/Home/HomeBanner/HomeBanner";
import TodoContainer from "../components/Home/TodoContainer/TodoContainer";

const Home = () => {
    const user = true;
    return (
        <div>
            {user ? <TodoContainer /> : <HomeBanner />}
        </div>
    );
};

export default Home;