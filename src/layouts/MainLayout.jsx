import { Outlet, useNavigation } from "react-router-dom/dist";
import Footer from "../components/Shared/Footer/Footer";
import Navigation from "../components/Shared/Navigation/Navigation";
import LoadingPage from "../pages/LoadingPage";

const MainLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <Navigation />
            {state === 'loading' ? <LoadingPage /> : <Outlet />}
            <Footer />
        </div>
    );
};

export default MainLayout;