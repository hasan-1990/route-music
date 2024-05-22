
import "./component/App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const App=()=>{
    return (
        <>
            <div className="apptop">
                <h3> my im here</h3>
                <nav className="apptop2">
                    <Link to="/">Home</Link>
                    <Link to="/Book">Music</Link>
                    <Link to="/About">about</Link>
                </nav>
            </div>
            <hr/>
            <Outlet/>
        </>
    );
}


export default App;

