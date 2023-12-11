import { Outlet } from "react-router-dom";
import Navber from "./components/Navber";


const Render = () => {
    return (
        <div>
            
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Render;