import { Outlet } from "react-router-dom";
import NavScroll from "../components/navbar";

 function IndexPage(){
    //Header
    return (
        <>
            <NavScroll></NavScroll>
            <div className="container p-3">
                <Outlet />
            </div>
        </>
    )
}


export default IndexPage; 