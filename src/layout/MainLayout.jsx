import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { useNavigation } from "react-router-dom";
import { Hourglass } from 'react-loader-spinner'
const MainLayout = () => {
    const navigate = useNavigation();

    return (
        <div className="max-w-[1240px] mx-auto">
            <Header></Header>
            {
                navigate.state === 'loading' ? <div className="h-screen flex justify-center items-center"><Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                /></div> : <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;