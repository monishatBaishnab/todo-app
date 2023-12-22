import { useContext } from "react";
import HomeBanner from "../components/Home/HomeBanner/HomeBanner";
import TaskContainer from "../components/Home/TaskContainer/TaskContainer";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UserBenifits from "../components/Home/HomeBanner/UserBenifits";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {user
                ?
                <DndProvider backend={HTML5Backend}>
                    <TaskContainer />
                </DndProvider>
                :
                <div>
                    <HomeBanner />
                    <UserBenifits />
                </div>}
        </div>
    );
};

export default Home;