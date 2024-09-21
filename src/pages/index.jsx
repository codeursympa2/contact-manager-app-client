import { Outlet } from "react-router-dom";

 function Index(){
    //Header
    return (<div className="container p-3">
        <Outlet />
    </div>)
}


export default Index; 